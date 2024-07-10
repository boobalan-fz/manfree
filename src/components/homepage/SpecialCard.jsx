import { roboto_flex } from "@/app/font";
import Image from "next/image";
const SpecialCard = ({ img, title, content }) => {
  return (
    <div
      className={`${roboto_flex.className} bg-[#F1F1F1]  border-[1.5px] border-black rounded-lg px-4 py-8 flex flex-col items-center `}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="relative border-[3px] shadow-md border-white bg-[#183D6D] rounded-full w-20 h-20 ">
          <Image
            src={img}
            alt="specialization"
            className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h2 className="text-[#183D6D] text-2xl  sm:text-3xl font-semibold ">
          {title}
        </h2>
      </div>
      <p className="text-base text-center tracking-wide font-normal  leading-7 text-[#353535] pt-6 px-4">
        {content}
      </p>
    </div>
  );
};

export default SpecialCard;
