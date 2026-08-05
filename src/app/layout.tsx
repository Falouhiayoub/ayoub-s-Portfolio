import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayoub Falouhi | AI-Augmented Full-Stack Developer & Automation Engineer",
  description: "Explore the digital intelligence portfolio of Ayoub Falouhi, an AI-Augmented Full-Stack Developer specialized in building intelligent web experiences, custom n8n automations, and scalable software architecture.",
  keywords: ["AI Engineer", "Full-Stack Developer", "Next.js", "Laravel", "React", "n8n", "Workflow Automation", "Ayoub Falouhi", "Morocco"],
  authors: [{ name: "Ayoub Falouhi" }],
  creator: "Ayoub Falouhi",
  openGraph: {
    title: "Ayoub Falouhi | AI-Augmented Full-Stack Developer & Automation Engineer",
    description: "I develop AI-powered web applications, automation systems, and scalable full-stack solutions that help businesses work smarter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Falouhi | AI-Augmented Full-Stack Developer",
    description: "I develop AI-powered web applications, automation systems, and scalable full-stack solutions.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-[#050816] text-[#F5F5F5]`}
      >
        {children}
      </body>
    </html>
  );
}
