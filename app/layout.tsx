import type { Metadata } from "next";
import "./globals.css";
import MobileTabBar from "@/components/MobileTabBar";

export const metadata: Metadata = {
  title: "NEXA \u2014 Enter the Cinema Universe",
  description: "Cinematic anime and entertainment experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-nexa-bg antialiased pb-16 md:pb-0">
        {children}
        <MobileTabBar />
      </body>
    </html>
  );
}
