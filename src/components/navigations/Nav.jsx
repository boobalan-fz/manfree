"use client";
import { useState } from "react";
import ResponsiveNav from "./ResponsiveNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {
  const navBar = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT US",
      href: "/about",
    },
    {
      name: "COURSES",
      href: "/courses",
    },
    {
      name: "CONTACT US",
      href: "/contact",
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="font-sans">
      <DesktopNav
        navBar={navBar}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <ResponsiveNav
        navBar={navBar}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Nav;
