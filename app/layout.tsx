import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { homeContent } from "./lib/siteContent";

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
  metadataBase: new URL("https://sonahabits.com"),
  title: homeContent["en-US"].metadata.title,
  description: homeContent["en-US"].metadata.description,
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
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var p=location.pathname;var l=p.startsWith('/ja')?'ja':p.startsWith('/ko')?'ko':p.startsWith('/es-MX')?'es-MX':p.startsWith('/pt-BR')?'pt-BR':'en-US';document.documentElement.lang=l;document.documentElement.dataset.locale=l}catch(e){}",
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
