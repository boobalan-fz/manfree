import Image from "next/image";
import avatar from "@/assets/aboutUs/avatar.svg";
import { poppins } from "@/app/font";

const StoryCard = ({ data }) => {
  return (
    <div className="rounded-lg shadow-md ">
      <h1
        className={`text-center p-10 text-textColor text-xl font-normal ${poppins.className}`}
      >
        {data.content}
      </h1>
      <div className="bg-[#F1F1F1] flex justify-between px-10 py-5">
        <div
          className={`${poppins.className} font-normal text-primary space-y-4`}
        >
          <h1 className="text-xl">{data.designation}</h1>
          <h1 className="text-2xl">{data.name}</h1>
        </div>
        <div>
          <Image src={avatar} alt="avatar" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
