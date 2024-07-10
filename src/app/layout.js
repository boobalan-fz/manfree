import "./globals.css";
import Nav from "@/components/navigations/Nav";
import Footer from "@/components/Footer";
import { inter } from "./font";

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
