import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import RGBGlow from "@/components/RGBGlow";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himesh Solanki | Full-Stack Architect",
  description: "High-performance digital experiences and Cyber Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 selection:text-primary overflow-x-hidden">
        <CustomCursor />
        <RGBGlow />
        <SmoothScroll>
          <main className="flex-1 w-full flex flex-col relative overflow-hidden">
            {children}
          </main>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
