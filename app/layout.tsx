import type { Metadata } from "next";
import { Inter, Shadows_Into_Light_Two } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shadows-into-light-two",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpennMind — From idea to impact, all in one workspace",
  description:
    "Stop juggling dozens of tools. Start building with one. Research, collaborate, and grow with AI by your side.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${shadowsIntoLightTwo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}