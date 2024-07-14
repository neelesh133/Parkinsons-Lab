import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer"
import { UserProvider } from "@/context/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parkinson's Lab",
  description: "Welcome to Parkinson's Lab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>
        <UserProvider>
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
