import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/app/components/nav";

export const metadata: Metadata = {
  title: "EDULIME",
  description: "منصة تعليمية مدعومة بالذكاء الاصطناعي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="font-sans antialiased" style={{ fontFamily: "'Noto Kufi Arabic', sans-serif" }}>
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
