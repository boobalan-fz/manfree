import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ClockIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import blog from "@/assets/WhatWeDoThree.png";
import Link from "next/link";

const BlogCard = ({ data }) => {
  return (
    <div className="flex flex-col rounded-md bg-white border border-[#183D6D] transition-transform hover:scale-105">
      <div className=" rounded-md shadow-sm  ">
        <Image
          src={data?.img || blog}
          className="object-cover h-64 rounded-t-md"
          alt="blog"
        />
      </div>
      <div className="px-6 py-5 flex flex-col gap-1 border-x border-x-[#183D6D] border-b border-b-[#183D6D] rounded-b-md">
        <span className="text-lg capitalize font-semibold   rounded-md  text-[#183D6D]   ">
          {data?.tags[1]}
        </span>

        <div className="flex gap-5 ">
          <div
            className="flex gap-2 text-sm  items-center text-[#696969]"
            title="Lessons"
          >
            <CalendarDaysIcon className="w-5 h-5 text-[#183D6D]" />
            {data?.publishDate}
          </div>
          <div
            className="flex gap-2 text-sm items-center text-[#696969]"
            title="Lessons"
          >
            <UserIcon className="w-5 h-5 text-[#183D6D]" />
            {data?.author}
          </div>
        </div>
        <h3 className="text-base pt-2 font-semibold text-[#183D6D]">
          {data?.blogtitle}
        </h3>
        <div className="flex items-center justify-between">
          <Link
            href={`/blogs/${data?.id}`}
            className="flex text-sm font-semibold text-[#FF9A53] gap-2 "
          >
            Learn more <ArrowRightIcon className="w-4 h-5 text-[#FF9A53]" />
          </Link>

          <button className="px-2 py-2 flex gap-2 items-center bg-[#183D6D] text-white rounded">
            Edit <PencilIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
