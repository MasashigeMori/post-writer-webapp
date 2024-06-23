import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const fontNotSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "TailwindCSS", "shadcn UI"],
  authors: [
    {
      name: "Masashige",
      url: siteConfig.url,
    },
  ],
  metadataBase: new URL(siteConfig.url),
  // openGraph: {
  //   type: "Website",
  //   locale: "ja",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   desription: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  twitter: {
    card: "summary_karge_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "Masashige",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn("bg-background antialiased min-h-screen",
      fontNotSansJP.className
      )}>
        {children}
      </body>
    </html>
  );
}
