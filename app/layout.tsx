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
  metadataBase: new URL("https://daybreakhabits.com"),
  title: "Daybreak: The Only Habit App as Beautiful as Your Goals",
  description:
    "The only habit app as beautiful as the life you're building, and the first that won't punish you for being human. Describe a goal in a few words and Daybreak's AI paints a personal world for its habits, with a calm consistency score that survives the days you miss. No streaks to break. No shame.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand-icon.png", sizes: "1024x1024", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-icon.png",
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
