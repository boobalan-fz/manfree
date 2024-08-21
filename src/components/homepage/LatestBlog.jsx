import { poppins, rubik } from "@/app/font";
import courseJava from "@/assets/dummy.png";
import {
  ArrowLongRightIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const LatestBlog = ({ data }) => {
  return (
    <div className="flex flex-col  rounded-2xl bg-white shadow-xl hover:scale-105 hover:delay-75 hover:duration-500">
      <div className=" rounded-md shadow-sm  ">
        <Image
          src={courseJava}
          className="object-fill rounded-t-md w-full"
          alt="core java"
        />
      </div>
      <div className="px-6 pt-6 pb-4 flex flex-col gap-4  rounded-b-md">
        <span
          className={`text-2xl font-semibold  text-primary p-2 border border-primary self-start  rounded-md ${rubik.className}`}
        >
          {data?.title}
        </span>
        <div className="flex gap-5  ">
          <div
            className={`${poppins.className} flex gap-2 items-center text-xl font-normal text-textColor`}
          >
            <CalendarIcon className="w-7 h-7 text-primary" />
            12 Aug, 2024
          </div>

          <div
            className={`${poppins.className} flex gap-2 items-center text-xl font-normal text-textColor`}
          >
            <UserIcon className="w-7 h-7 text-primary" />
            Author
          </div>
        </div>
        <p className={`${rubik.className} font-semibold text-3xl text-primary`}>
          {data?.description}
        </p>
      </div>
      <Link
        href={`/blogs`}
        className={`${poppins.className} flex grow items-end px-6 pb-4 text-xl font-medium gap-2 text-secondary`}
      >
        Learn More <ArrowLongRightIcon className="h-7 w-7 text-secondary" />
      </Link>
    </div>
  );
};

export default LatestBlog;
