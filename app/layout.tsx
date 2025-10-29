import type React from "react"
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Mamá Lechuga",
  description: "de la madre naturaleza a tu mesa...",
  openGraph: {
    title: "Mamá Lechuga",
    description: "de la madre naturaleza a tu mesa...",
    images: [
      {
         url: "/mama-lechuga-metadata.jpeg",
        width: 500,
        height: 500,
        alt: "Mamá Lechuga",
      },
    ],
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
