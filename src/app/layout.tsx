import type { Metadata } from "next";
import { Space_Grotesk, Inter, Syncopate, Orbitron, Iceland } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const syncopate = Syncopate({
  variable: "--font-wide",
  subsets: ["latin"],
  weight: ["700"],
});

const orbitron = Orbitron({
  variable: "--font-tech",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const iceland = Iceland({
  variable: "--font-iceland",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Himesh — Full Stack Developer",
  description:
    "I'm Himesh — a Full stack developer from Vadodara, India. I craft clean, fast, and thoughtful web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${syncopate.variable} ${orbitron.variable} ${iceland.variable}`}>
      <body>
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
