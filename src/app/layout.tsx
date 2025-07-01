import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shadcn/ui Starter",
  description: "A modern Next.js starter template with shadcn/ui, Tailwind CSS, and TypeScript",
  keywords: ["nextjs", "shadcn", "tailwindcss", "typescript", "starter", "template"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable}`,
          'antialiased bg-background text-foreground min-h-screen'
        )}
      >
        {children}
      </body>
    </html>
  );
}
