
import "./globals.css";
import AboutPage from "./lab1/components/about/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <>
         <AboutPage/>
         </>
        {children}
      </body>
    </html>
  );
}
