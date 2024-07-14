import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-black">
        <Header/>
        <div className="h-[0.1rem] bg-slate-400"></div>
        {children}
    </main>
  );
}
