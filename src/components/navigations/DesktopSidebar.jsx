import Image from "next/image";
import logo from "@/assets/adminLogo.svg";

const DesktopSidebar = ({ navigationItems }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Image src={logo} alt="logo" />
      </div>
      <nav className="space-y-1 pl-2 py-4 ">{navigationItems}</nav>
    </>
  );
};

export default DesktopSidebar;
