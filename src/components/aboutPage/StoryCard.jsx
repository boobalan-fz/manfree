import Image from "next/image";
import avatar from "@/assets/aboutUs/avatar.svg";
import { poppins } from "@/app/font";
import { StarIcon } from "@heroicons/react/24/outline";

const StoryCard = ({ data }) => {
  return (
    <div className="rounded-lg shadow-lg  flex flex-col justify-between">
      <h1
        className={`text-center sm:p-10 p-5 md:p-5 lg:p-10 text-textColor sm:text-xl text-lg md:text-lg lg:text-xl font-normal ${poppins.className}`}
      >
        {data.content}
      </h1>
      <div className="bg-[#F1F1F1] flex justify-between items-center sm:px-10 px-8 md:px-8 lg:px-10 py-5">
        <div
          className={`${poppins.className} font-normal text-primary space-y-4`}
        >
          {/* <h1 className="sm:text-xl text-lg md:text-lg lg:text-xl">
            {data.designation}
          </h1> */}
          <h1 className="sm:text-2xl text-xl md:text-xl lg:text-2xl">
            {data.name}
          </h1>
        </div>
        <div className="flex gap-2">
          <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
          <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
          <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
          <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
          <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
        </div>
        {/* <div>
          <Image src={avatar} alt="avatar" width={100} height={100} />
        </div> */}
      </div>
    </div>
  );
};

export default StoryCard;
