import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "جمعية فهم التعليمية",
  description: "جمعية تعليمية تُعنى بتدريس العلوم الأكاديمية والعقيدة",
  keywords: "تعليم، جمعية، فهم، تعليمية، علوم، عقيدة",
  authors: [{ name: "جمعية فهم التعليمية" }],
  openGraph: {
    title: "جمعية فهم التعليمية",
    description: "جمعية تعليمية تُعنى بتدريس العلوم الأكاديمية والعقيدة",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}