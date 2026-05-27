import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import RGBGlow from "@/components/RGBGlow";
import { Analytics } from "@vercel/analytics/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} antialiased dark`} style={{ colorScheme: 'dark' }}>
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
