import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { InvertedCursor } from "@/components/ui/inverted-cursor";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: "Vivin | Full-Stack Developer & AI Systems",
  description: "I build fast, modern systems and AI workflows.",
};

import { ThemeProvider } from "@/components/theme-provider";
import { ScrollReset } from "@/components/scroll-reset";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollReset />
          <InvertedCursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
