import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Joco Badique",
    description: "My personal portfolio app with space vibe sheeshh!✨",
    images: [
      {
        url: "preview1.png",
        width: 800,
        height: 600,
        type: "png",
        secureUrl: "https://my-nextjs-portfolio-app.vercel.app/",
      },
      {
        url: "preview1.png",
        width: 1800,
        height: 1600,
        type: "png",
        alt: "Joco Badique",
        secureUrl: "https://my-nextjs-portfolio-app.vercel.app/",
      },
    ],
  },
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
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
