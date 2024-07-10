import { PopoverGroup } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import manfree from "@/assets/manfreeLogo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DesktopNav = ({ navBar, setMobileMenuOpen, mobileMenuOpen }) => {
  const path = usePathname();

  return (
    <>
      <nav
        className={` mx-auto flex w-full items-center justify-between  p-3 text-zinc-300 lg:px-12 bg-[#0E0F3B]`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Delta Wing</span>
            <div className="relative h-[77.83px] w-[106.37px]">
              <Image
                src={manfree.src}
                alt="delta"
                fill
                objectPosition="center"
              />
            </div>
          </Link>
        </div>
        <div className={`flex lg:hidden ${mobileMenuOpen && "hidden"}`}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navBar.map((item, index) => (
            <Link
              className={`relative text-sm font-medium  ${
                path == item.href ? "text-[#FE9601] " : "text-white"
              } leading-6  pl-3`}
              href={item.href}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </PopoverGroup>
      </nav>
    </>
  );
};

export default DesktopNav;
