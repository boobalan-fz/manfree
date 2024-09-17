import { BookOpenIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ data }) => {
  return (
    <div className="  rounded-md bg-white drop-shadow-xl hover:scale-105 hover:delay-75 hover:duration-500">
      <Link href={data?.href} className="h-full flex flex-col ">
        <div className=" rounded-md shadow-sm ">
          <Image
            src={data?.img}
            className="object-cover h-64 rounded-t-md"
            alt="core java"
          />
        </div>
        <div className="px-6 py-5 flex flex-col gap-3  rounded-b-md">
          <span className="text-base capitalize self-start font-medium py-1 px-[11.5px] rounded-md   text-black border border-[#183D6D]  ">
            {data.tag}
          </span>
          <div>
            <h1 className="font-bold sm:text-3xl text-2xl md:text-2xl lg:text-3xl text-[#183D6D]">
              {data?.title}
            </h1>
          </div>
        </div>
        <div className="flex gap-5 px-6 pb-5 grow items-end">
          <div className="flex gap-2 items-center text-[#696969]">
            <BookOpenIcon className="w-5 h-5 text-[#FF9A53] text-base" />
            {data?.modules} Modules
          </div>
          <div className="flex gap-2 items-center text-[#696969]">
            <ClockIcon className="w-5 h-5 text-[#FF9A53]" />
            {data?.hours} Hrs
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
