import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditiya Maulana Sandy - Portfolio",
  description: "Computer Science - Software Engineering student at Bina Nusantara University. Developing scalable, maintainable, and robust applications for modern digital transformation.",
  keywords: ["Aditiya Maulana Sandy", "Portfolio", "Computer Science", "Software Engineering", "Web Developer", "React", "Next.js"],
  authors: [{ name: "Aditiya Maulana Sandy" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}