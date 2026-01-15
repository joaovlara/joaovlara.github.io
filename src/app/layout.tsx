import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jwao | Desenvolvedor Web e Front-End",
  description: "Portfólio de Jwao - Desenvolvedor Web e Front-End especializado em Next.js e TailwindCSS",
  keywords: ["Desenvolvedor Web", "Front-End", "Next.js", "Tailwind", "Landing Page", "Jwao"],
  openGraph: {
    title: "Jwao | Desenvolvedor Web e Front-End",
    description: "Confira meus projetos e habilidades em desenvolvimento web moderno.",
    url: "http://jwaodev.com.br",
    siteName: "Portfólio Jwao",
    images: [
      {
        url: "http://jwaodev.com.br/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio de Jwao",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jwao | Desenvolvedor Web e Front-End",
    description: "Portfólio de desenvolvedor especializado em Next.js e TailwindCSS",
    images: ["http://jwaodev.com.br/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-stone-950 text-stone-300 overflow-x-hidden h-auto max-w-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
