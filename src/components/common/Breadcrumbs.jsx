"use client";
import { rubik } from "@/app/font";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({ navBar }) => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
  ];

  if (pathArray[0] === "courses") {
    breadcrumbs.push({
      name: "Courses",
      href: "/courses",
    });

    if (pathArray.length > 1) {
      breadcrumbs.push({
        name: "Course Details",
        href: pathname,
      });
    }
  } else {
    let accumulatedPath = "";
    pathArray.forEach((segment) => {
      accumulatedPath += `/${segment}`;
      const navItem = navBar.find((item) => item.href === accumulatedPath);
      breadcrumbs.push({
        name: navItem?.name || segment,
        href: accumulatedPath,
      });
    });
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-600">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {!isLast ? (
                <Link
                  href={crumb.href}
                  className={`${
                    crumb.href === pathname ? "text-[#FF9A53]" : "text-primary"
                  } sm:text-2xl text-xl md:text-xl lg:text-2xl font-semibold ${
                    rubik.className
                  } capitalize`}
                >
                  {crumb.name}
                </Link>
              ) : (
                <span
                  className={`${
                    crumb.href === pathname ? "text-[#FF9A53]" : "text-primary"
                  }  sm:text-2xl text-xl md:text-xl lg:text-2xl  font-semibold ${
                    rubik.className
                  } capitalize`}
                >
                  {crumb.name}
                </span>
              )}
              {!isLast && (
                <span className="ml-1">
                  <ChevronRightIcon className="h-7 w-7" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
