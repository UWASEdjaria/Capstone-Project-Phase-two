
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
      <body
       
      >
       <main className="flex-1"> {children}</main>
      </body>
    </html>
  );
}
