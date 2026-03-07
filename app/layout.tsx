import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bpmf = localFont({
  src: "../public/fonts/BpmfZihiKaiStd.ttf",
  variable: "--font-bpmf",
});

const nunito = localFont({
  src: "../public/fonts/NunitoSans.ttf",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Scalero - 智能应用增长引擎 | 精准获客与留存平台",
  description: "Scalero 是一款帮助应用开发者构建可持续用户增长系统的智能平台。通过 AI 数据分析、多渠道触达管理，实现移动应用的精准获客与留存提升。",
  icons: "/icons/favicon.svg"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bpmf.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}