const DEFAULT_CTA_URL = "https://example.com/start";

const ctaUrl = process.env.NEXT_PUBLIC_CTA_URL?.trim() || DEFAULT_CTA_URL;

export const publicEnv = {
  ctaUrl,
} as const;
