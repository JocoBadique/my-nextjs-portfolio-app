import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/cursor";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joco Badique",
  description: "My personal portfolio app with space vibe sheeshh!✨",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={inter.className}>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <CustomCursor />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}