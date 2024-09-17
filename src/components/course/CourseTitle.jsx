import { rubik } from "@/app/font";
import Image from "next/image";
import coursebanner from "@/assets/coursebanner.png";
import { BookOpenIcon, ClockIcon } from "@heroicons/react/24/outline";
import Union from "@/assets/Union.svg";
import Breadcrumbs from "../common/Breadcrumbs";

const CourseTitle = ({ title, data, module, hours }) => {
  const navBar = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About us",
      href: "/about",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "Contact us",
      href: "/contact",
    },
  ];

  return (
    <div className="bg-[#F5F9FB]  flex justify-between">
      <div className="sm:px-20 px-5 md:px-5 lg:px-20 w-full  h-full py-12">
        <div>
          <Breadcrumbs navBar={navBar} />
        </div>
        <h1
          className={`${rubik.className} text-[#183D6D] py-12 font-semibold sm:text-5xl text-3xl lg:text-5xl md:text-3xl`}
        >
          {title}
        </h1>
        {/* <p
          className={`${poppins.className} text-[#314252] text-base  tracking-tight pr-52  pt-4 `}
        >
          Advance your career in Industrial Automation with our comprehensive
          PLC programming course and secure your dream job in the field.
        </p> */}
        {data && (
          <div className="flex gap-6 item-end pt-5">
            <span className="flex items-center justify-center  gap-2">
              <BookOpenIcon className="h-5 w-5 text-[#183D6D] " />
              <h3 className="text-[#696969] font-normal sm:text-sm text-xs">
                {module} Modules
              </h3>
            </span>
            <span className="flex items-center justify-center  gap-2">
              <ClockIcon className="h-5 w-5 text-[#183D6D] " />
              <h3 className="text-[#696969] font-normal sm:text-sm text-xs">
                {hours} hours
              </h3>
            </span>
            <span className="flex items-center justify-center  gap-2">
              <Image src={Union} className="h-5 w-5" alt="img" />
              <h3 className="text-[#696969] font-normal sm:text-sm text-xs">
                Intermediate
              </h3>
            </span>
          </div>
        )}
      </div>
      <div className="sm:block hidden">
        <Image
          src={coursebanner}
          alt="img"
          className=" h-full object-fill object-center"
        />
      </div>
    </div>
  );
};

export default CourseTitle;
