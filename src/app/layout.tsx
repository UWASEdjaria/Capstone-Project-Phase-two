
"use client";
import "./globals.css";
import Login from "./lab2/app/login/page";
import SignUp from "./lab2/app/signUp/page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
       <main className="flex-1"> {children}</main>
      </body>
    </html>
  );
}
