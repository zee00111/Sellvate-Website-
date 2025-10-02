import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import AOSProvider from '@/components/Content/AOSProvider';

export const metadata: Metadata = {
  icons: { icon: '/favicon.ico' } // or '/favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={""}>
        <AOSProvider>
          <NavigationBar />
          {children}
          <Analytics />
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
