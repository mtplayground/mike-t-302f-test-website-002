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

export const metadata: Metadata = {
  title: "Mike T Test Website",
  description: "A Next.js App Router project initialized with TypeScript.",
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
