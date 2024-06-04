import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo",
  description: "learn as you play!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
