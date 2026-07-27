import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXA — Enter the Cinema Universe",
  description: "Cinematic anime and entertainment experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-nexa-bg antialiased">{children}</body>
    </html>
  );
}
