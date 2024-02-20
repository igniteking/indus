import type { Metadata } from "next";

import Addtional from "@/components/Addtional";
import Loader from "@/components/Loader";

import "../public/assets/css/plugins.css";
import "../public/assets/css/style.css";
import Navbar from "@/components/Navbar";
import Includes from "@/components/Includes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Indus",
  description: "Indus Template | Zaidan khan",
  keywords: [
    "zaidan",
    "zaidankhan",
    "HTML5 Template Geekfolio Multi-Purpose themeforest",
    "indus",
  ],
  authors: [{ name: "Zaidan khan", url: "https://nextjs.org" }],
  creator: "Zaidan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Includes />
      <body className="home-main-crev main-bg">
        <div className="cursor"></div>
        <div className="progress-wrap cursor-pointer">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        <Addtional />
      </body>
    </html>
  );
}
