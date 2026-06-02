import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const montserratHeading = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
});

const montserratBody = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Enactus Philippines",
    template: "%s",
  },
  description:
    "Enactus Philippines unites student, academic and business leaders using innovation and entrepreneurship to build a sustainable future for the Philippines.",
  openGraph: {
    title: "Enactus Philippines",
    description:
      "A national network of student-led ventures driving social impact through entrepreneurship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserratHeading.variable} ${montserratBody.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
