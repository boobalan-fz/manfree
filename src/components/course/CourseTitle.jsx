import { rubik, poppins } from "@/app/font";
import Image from "next/image";
import coursebanner from "@/assets/coursebanner.png";
import { BookOpenIcon, ClockIcon } from "@heroicons/react/24/outline";
import Union from "@/assets/Union.svg";

const CourseTitle = () => {
  return (
    <div className="bg-[#F5F9FB]  flex justify-between">
      <div className="px-20 w-full  h-full pt-12">
        <h1
          className={`${rubik.className} text-[#183D6D] pt-12 font-semibold text-5xl`}
        >
          Course Name
        </h1>
        <p
          className={`${poppins.className} text-[#314252] text-base  tracking-tight pr-52  pt-4 `}
        >
          App Development by building 100 projects in 100 days. Learn data
          science, automation, build websites, games and apps!
        </p>
        <div className="flex gap-6 item-end pt-2">
          <span className="flex items-center justify-center  gap-2">
            <BookOpenIcon className="h-5 w-5 text-[#183D6D] " />
            <h3 className="text-[#696969] font-normal text-sm">03 Modules</h3>
          </span>
          <span className="flex items-center justify-center  gap-2">
            <ClockIcon className="h-5 w-5 text-[#183D6D] " />
            <h3 className="text-[#696969] font-normal text-sm">10 hours</h3>
          </span>
          <span className="flex items-center justify-center  gap-2">
            <Image src={Union} className="h-5 w-5" alt="img" />
            <h3 className="text-[#696969] font-normal text-sm">Intermediate</h3>
          </span>
        </div>
      </div>
      <div className="">
        <Image src={coursebanner} alt="img" />
      </div>
    </div>
  );
};

export default CourseTitle;
