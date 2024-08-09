import Nav from "@/components/navigations/Nav";
import Footer from "@/components/navigations/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
