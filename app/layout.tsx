import "./globals.css";
import Navbar from "@/components/Navbar"; // We'll create this component next
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Code Learning Platform",
  description: "Learn to code with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Our Global Navbar */}
        <Navbar />
        
        {/* The main content of each page */}
        {children}
      </body>
    </html>
  );
}
