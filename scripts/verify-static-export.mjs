import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const baseURL = "http://127.0.0.1:8080";
const startupTimeoutMs = 15_000;

const textChecks = [
  {
    includes: [
      "Agent Team for Founders",
      "Autonomous SDLC that turns intent into production",
      "A delivery loop built for founder momentum",
      "Software delivery that stays close to your repo",
      "https://example.com/start",
    ],
    path: "/",
  },
  {
    includes: [
      "User-agent: *",
      "Allow: /",
      "Sitemap: https://example.com/sitemap.xml",
    ],
    path: "/robots.txt",
  },
  {
    includes: [
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      "<loc>https://example.com/</loc>",
    ],
    path: "/sitemap.xml",
  },
];

const assetChecks = [
  {
    minBytes: 1_000,
    path: "/favicon.ico",
  },
  {
    contentType: "image/png",
    minBytes: 10_000,
    path: "/images/og-image.png",
  },
];

async function fetchWithTimeout(url, timeoutMs = 2_000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function assertPortAvailable() {
  try {
    const response = await fetchWithTimeout(baseURL, 500);

    if (response.ok) {
      throw new Error(`Port 8080 is already serving ${baseURL}`);
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return;
    }

    if (error instanceof TypeError) {
      return;
    }

    throw error;
  }
}

function startStaticServer() {
  const env = { ...process.env };
  delete env.FORCE_COLOR;

  const logs = [];
  const server = spawn("npm", ["run", "serve"], {
    detached: process.platform !== "win32",
    env: {
      ...env,
      NO_COLOR: "1",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });

  const collectLog = (chunk) => {
    logs.push(chunk.toString());
  };

  server.stdout.on("data", collectLog);
  server.stderr.on("data", collectLog);

  return { logs, server };
}

function stopStaticServer(server) {
  if (server.exitCode !== null || server.signalCode !== null) {
    return;
  }

  if (process.platform === "win32") {
    server.kill("SIGTERM");
    return;
  }

  process.kill(-server.pid, "SIGTERM");
}

async function waitForStaticServer(server, logs) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < startupTimeoutMs) {
    if (server.exitCode !== null) {
      throw new Error(`Static server exited early:\n${logs.join("")}`);
    }

    try {
      const response = await fetchWithTimeout(baseURL);

      if (response.ok) {
        return;
      }
    } catch {
      // Keep polling until the server accepts connections or times out.
    }

    await delay(250);
  }

  throw new Error(`Timed out waiting for static server:\n${logs.join("")}`);
}

async function verifyTextFile({ includes, path }) {
  const response = await fetchWithTimeout(new URL(path, baseURL));

  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  const body = await response.text();
  const missing = includes.filter((expected) => !body.includes(expected));

  if (missing.length > 0) {
    throw new Error(
      `${path} is missing expected content: ${missing.join(", ")}`,
    );
  }
}

async function verifyAsset({ contentType, minBytes, path }) {
  const response = await fetchWithTimeout(new URL(path, baseURL));

  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  if (contentType) {
    const actualContentType = response.headers.get("content-type") || "";

    if (!actualContentType.includes(contentType)) {
      throw new Error(
        `${path} returned content-type ${actualContentType}, expected ${contentType}`,
      );
    }
  }

  const byteLength = (await response.arrayBuffer()).byteLength;

  if (byteLength < minBytes) {
    throw new Error(
      `${path} was ${byteLength} bytes, expected at least ${minBytes}`,
    );
  }
}

await assertPortAvailable();

const { logs, server } = startStaticServer();

try {
  await waitForStaticServer(server, logs);

  for (const check of textChecks) {
    await verifyTextFile(check);
  }

  for (const check of assetChecks) {
    await verifyAsset(check);
  }

  console.log("Static export verified from out/ via npm run serve.");
} finally {
  stopStaticServer(server);
}
