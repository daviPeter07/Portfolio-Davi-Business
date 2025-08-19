import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/src/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Davi Peterson - Desenvolvedor de Software",
  description:
    "Portfólio profissional de Davi Peterson - Desenvolvedor Full Stack especializado em Next.js, Node.js e tecnologias modernas",
  icons: {
    icon: "/meProfessional.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>

        {/* Open Graph */}
        <meta property="og:title" content={String(metadata.title)} />
        <meta property="og:description" content={String(metadata.description)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://davi-peterson.vercel.app" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/45e1268b-86cd-49db-8d44-b2d2246f74a4.jpg?token=zBXpmuoggtRcZn5tWqDYOY5iKnD-XB7wnOGGJ6sEuMg&height=299&width=1200&expires=33291618338" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.title)} />
        <meta name="twitter:description" content={String(metadata.description)} />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/45e1268b-86cd-49db-8d44-b2d2246f74a4.jpg?token=zBXpmuoggtRcZn5tWqDYOY5iKnD-XB7wnOGGJ6sEuMg&height=299&width=1200&expires=33291618338" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Davi Peterson",
              url: "https://davi-peterson.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/davipeterson/",
                "https://github.com/daviPeter07",
              ],
              jobTitle: "Desenvolvedor Full Stack",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
