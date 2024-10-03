import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";

const oswald = Oswald({
   weight: ['200','300','400','500','600','700'],
   subsets: ['latin']
})
export const metadata: Metadata = {
  title: "REI E-CELL",
  description: "Turn your dreams into startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
