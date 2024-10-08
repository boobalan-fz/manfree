import "./globals.css";
import { poppins } from "./font";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Manfree technologies",
  description: "Manfree technologies offcial website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Manfree-Logo.svg" type="image/svg+xml" />
      </head>
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
