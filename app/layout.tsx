import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lucas Shao| Seeker of Employment",
  description: "Portfolio website of Lucas Shao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

