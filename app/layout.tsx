import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
