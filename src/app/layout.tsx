import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const alfa = Alfa_Slab_One({
  variable: "--font-alfa",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "O'Connells' Burgers — Smashed Daily From The Van",
  description:
    "A black van. A quiet car park. Banging smashed burgers cooked fresh to order. Find O'Connells' Burgers and ring 07787 732896.",
  openGraph: {
    title: "O'Connells' Burgers",
    description: "Smashed daily. Made fresh. Estd 2025.",
    images: ["/oclogo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${alfa.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream-bright">
        {children}
      </body>
    </html>
  );
}
