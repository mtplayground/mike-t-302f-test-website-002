import { expect, test } from "@playwright/test";

const expectedCtaUrl =
  process.env.NEXT_PUBLIC_CTA_URL?.trim() || "https://example.com/start";

const sections = [
  { id: "home", text: "Agent Team for Founders" },
  { id: "value", text: "Autonomous SDLC that turns intent into production" },
  { id: "how-it-works", text: "A delivery loop built for founder momentum" },
  { id: "features", text: "Software delivery that stays close to your repo" },
  { id: "call-to-action", text: "You just talk, we handle the rest." },
] as const;

test("home page loads, renders all sections, and exposes the configured CTA", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Agent Team for Founders");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Agent Team for Founders",
    }),
  ).toBeVisible();

  for (const section of sections) {
    const locator = page.locator(`#${section.id}`);

    await expect(locator).toBeVisible();
    await expect(locator).toContainText(section.text);
  }

  await expect(
    page.locator("#call-to-action").getByRole("link", {
      name: /start building/i,
    }),
  ).toHaveAttribute("href", expectedCtaUrl);
});
