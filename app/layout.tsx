import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ContentContainer } from "@/components/layout/content-container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const siteName = "Agent Team";
const siteTitle = "Agent Team for Founders";
const siteDescription =
  "Turn product ideas into production-ready, secure software with an autonomous team that plans, builds, tests, and ships.";
const ogImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Agent Team for Founders",
};

export const metadata: Metadata = {
  applicationName: siteName,
  description: siteDescription,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    description: siteDescription,
    images: [ogImage],
    locale: "en_US",
    siteName,
    title: siteTitle,
    type: "website",
    url: "/",
  },
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  twitter: {
    card: "summary_large_image",
    description: siteDescription,
    images: [ogImage.url],
    title: siteTitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main-content" className="site-main">
            <ContentContainer>{children}</ContentContainer>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
