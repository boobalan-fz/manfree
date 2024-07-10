import courseJava from "@/assets/dummy.png";
import {
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const LatestBlog = ({ data }) => {
  return (
    <div className="flex flex-col  rounded-md bg-white border border-[#183D6D]">
      <div className=" rounded-md shadow-sm  ">
        <Image
          src={courseJava}
          className="object-fill rounded-t-md"
          alt="core java"
        />
      </div>
      <div className="px-6 py-6 flex flex-col gap-4 border-x border-x-[#183D6D] border-b border-b-[#183D6D] rounded-b-md">
        <span className="text-lg font-medium  text-[#183D6D]">
          {data?.title}
        </span>
        <div className="flex gap-5  ">
          <div
            className="flex gap-2 items-center text-base font-normal text-[#696969]"
            title="Lessons"
          >
            <CalendarIcon className="w-5 h-5 text-[#FF9A53]" />
            12 Aug, 2024
          </div>
          <div>/</div>
          <div
            className="flex gap-2 items-center text-base font-normal text-[#696969]"
            title="Lessons"
          >
            <ClockIcon className="w-5 h-5 text-[#FF9A53]" />
            Education
          </div>
        </div>
        <p className="font-normal text-base text-[#183D6D]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default LatestBlog;
