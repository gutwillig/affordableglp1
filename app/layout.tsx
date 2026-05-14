import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Affordable GLP-1 | Compare Telehealth Providers for Weight Loss Medications",
    template: "%s | Affordable GLP-1",
  },
  description:
    "Compare GLP-1 telehealth providers like Hims, Ro, and Henry Meds. Find the most affordable semaglutide and tirzepatide options with our unbiased reviews and pricing comparisons.",
  keywords: [
    "GLP-1",
    "semaglutide",
    "tirzepatide",
    "Wegovy",
    "Ozempic",
    "Zepbound",
    "Mounjaro",
    "weight loss medication",
    "telehealth",
    "compounded semaglutide",
  ],
  authors: [{ name: "Affordable GLP-1 Editorial Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://affordableglp-1.com",
    siteName: "Affordable GLP-1",
    title: "Affordable GLP-1 | Compare Telehealth Providers",
    description:
      "Compare GLP-1 telehealth providers. Find the most affordable semaglutide and tirzepatide options with unbiased reviews.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable GLP-1 | Compare Telehealth Providers",
    description:
      "Compare GLP-1 telehealth providers. Find the most affordable semaglutide and tirzepatide options.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={cn(
        inter.variable,
        jetbrainsMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
