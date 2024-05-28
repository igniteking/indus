import type { Metadata } from "next";
import "../public/assets/css/plugins.css";
import "../public/assets/css/style.css";

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
      {children}
    </html>
  );
}
