import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dawn Song — Make Your Life Extraordinary",
  description:
    "Dawn Song is a calm, beautiful routine builder for people tired of starting over. A consistency score that survives missed days, personalized painted worlds for every part of your life, and progress you'll actually want to look at. No streak resets. No shame.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7efe1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('ds-theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}",
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
