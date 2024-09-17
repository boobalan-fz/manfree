import DesktopSidebar from "@/components/navigations/DesktopSidebar";
import { BookOpenIcon, QueueListIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  {
    name: "Courses",
    href: "/admin/courses",
    icon: BookOpenIcon,
    current: false,
    divider: true,
  },
  {
    name: "Batches",
    href: "/admin/batches",
    icon: QueueListIcon,
    current: false,
    divider: true,
  },
];

const navigationItems = navigation.map((item, index) => {
  return (
    <div key={index}>
      {item.label && (
        <div className="text-md !my-4 pl-2 font-semibold text-gray-400">
          {item.label}
        </div>
      )}
      <div className="relative">
        <Link
          key={item.name}
          href={!item.extra_route ? item.href : "#"}
          className={
            "  text-textColor group flex items-center rounded-[4px] px-2 py-2 text-base font-normal"
          }
          onClick={item.extra_route ? toggleDropdown : null}
        >
          <item.icon className={"text-mygraytext mr-4 h-6 w-6"} />
          {item.name}
        </Link>
      </div>
    </div>
  );
});

export default function Layout({ children }) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className=" py-4 border sm:w-64 md:w-auto lg:w-64 sticky top-0 self-start h-screen hidden md:flex md:flex-col bg-slate-100">
        <DesktopSidebar navigationItems={navigationItems} />
      </div>
      <div className="px-2 py-6 sm:px-4 md:px-6 flex-1 overflow-auto bg-[#F8F9FE]">
        {children}
      </div>
    </div>
  );
}
