import {
  Sf_Pro,
  Sf_Pro_Rounded,
  Inter,
  Shadows_Into_Light_Two,
} from "next/font/google";
import "./globals.css";

const sFPro = Sf_Pro({
  subsets: ["latin"],
  weight: ["400", "510", "590"],
  variable: "--font-sf-pro",
});
const sFProRounded = Sf_Pro_Rounded({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sf-pro-rounded",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["450", "500"],
  variable: "--font-inter",
});
const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shadows-into-light-two",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sFPro.variable} ${sFProRounded.variable} ${inter.variable} ${shadowsIntoLightTwo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}