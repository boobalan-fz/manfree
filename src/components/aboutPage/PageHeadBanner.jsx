import { rubik, poppins } from "@/app/font";
import Image from "next/image";
import coursebanner from "@/assets/coursebanner.png";

const PageHeadBanner = ({ title }) => {
  return (
    <div className="bg-[#F5F9FB]  flex justify-between">
      <div className="px-20 w-full  h-full pt-12">
        <h1
          className={`${rubik.className} text-[#183D6D] pt-12 font-semibold text-6xl w-[800px]`}
        >
          {title}
        </h1>
        {/* <p
          className={`${poppins.className} text-[#314252] text-base  tracking-tight pr-52  pt-4 `}
        >
          Advance your career in Industrial Automation with our comprehensive
          PLC programming course and secure your dream job in the field.
        </p> */}
      </div>
      <div className="">
        <Image src={coursebanner} alt="img" />
      </div>
    </div>
  );
};

export default PageHeadBanner;
