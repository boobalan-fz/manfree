import { BookOpenIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CourseCard = ({ data }) => {
  return (
    <div className="flex flex-col  rounded-md bg-white border border-[#183D6D]">
      <div className=" rounded-md shadow-sm  ">
        <Image
          src={data?.img}
          className="object-cover h-64 rounded-t-md"
          alt="core java"
        />
      </div>
      <div className="px-6 py-5 flex flex-col gap-3 border-x border-x-[#183D6D] border-b border-b-[#183D6D] rounded-b-md">
        <span className="text-lg self-start font-medium py-1 px-[11.5px] rounded-md   text-[#183D6D] bg-[#e9f5fa]   ">
          {data?.title}
        </span>
        <p className="font-normal text-lg ">{data?.description}</p>
        <div className="flex gap-5 border-t border-t-slate-300 pt-2">
          <div className="flex gap-2 items-center text-[#696969]">
            <BookOpenIcon className="w-5 h-5 text-[#FF9A53]" />
            22 Modules
          </div>
          <div className="flex gap-2 items-center text-[#696969]">
            <ClockIcon className="w-5 h-5 text-[#FF9A53]" />6 Hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
