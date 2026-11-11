import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Keen Keeper. Connect with your friends.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} h-full antialiased bg-[#F8FAFC]`}
    >
      <body className="min-h-full flex flex-col container mx-auto">
        <Navbar></Navbar>
        <main className="w-[80%] mx-auto">{children}</main>
      </body>
    </html>
  );
}
