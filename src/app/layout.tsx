import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deloona",
  description: "Clean Next.js starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={{ backgroundColor: "#F7F6F4" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Jost:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#F7F6F4", color: "#2C2C2A" }}
      >
        {children}
        {/* Tabler icons — loaded after the page is interactive so it never blocks rendering */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
