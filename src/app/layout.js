import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigations/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manfree technologies",
  description: "Manfree technologies offcial website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
