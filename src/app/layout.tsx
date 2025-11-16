import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




export const metadata = {
  title: "Medium — Human stories & ideas",
  description: "A place to read, write, and deepen your understanding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
