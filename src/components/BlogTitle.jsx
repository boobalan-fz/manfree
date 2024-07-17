import { rubik, poppins } from "@/app/font";
import Image from "next/image";
import coursebanner from "@/assets/coursebanner.png";

const BlogTitle = ({ title }) => {
  return (
    <div className="bg-[#F5F9FB]  flex justify-between">
      <div className="px-20 w-full  h-full pt-12">
        <h1
          className={`${rubik.className} text-[#183D6D] pt-12 font-semibold text-5xl`}
        >
          {title}
        </h1>
      </div>
      <div className="">
        <Image src={coursebanner} alt="img" />
      </div>
    </div>
  );
};

export default BlogTitle;
