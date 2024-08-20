import { poppins, roboto_flex, rubik } from "@/app/font";
import Image from "next/image";
const SpecialCard = ({ img, title, content }) => {
  return (
    <div
      className={` bg-white shadow-md rounded-2xl p-10 flex flex-col items-center `}
    >
      <div className="flex flex-col justify-center items-center space-y-10">
        <div className="relative border-[3px] shadow-md border-white bg-[#183D6D] rounded-full w-28 h-28 ">
          <Image
            src={img}
            alt="specialization"
            className="w-12 h-1w-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h2
          className={`${rubik.className} text-primary text-2xl  sm:text-3xl font-semibold`}
        >
          {title}
        </h2>
      </div>
      <p
        className={` ${poppins.className} text-base text-center tracking-wide font-normal  leading-7 text-[#353535] pt-6 `}
      >
        {content}
      </p>
    </div>
  );
};

export default SpecialCard;
