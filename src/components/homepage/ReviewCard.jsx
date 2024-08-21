import { poppins, rubik } from "@/app/font";
import { StarIcon } from "@heroicons/react/24/outline";

const ReviewCard = () => {
  return (
    <div className="p-10 shadow-xl rounded-lg bg-white">
      <h1 className={`${rubik.className} font-semibold text-2xl text-primary`}>
        Shalini Muruganantham
      </h1>
      <div className="flex gap-2 mt-3">
        <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
        <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
        <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
        <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
        <StarIcon className="h-7 w-7 fill-[#FFB800] text-[#FFB800]" />
      </div>
      <p
        className={`${poppins.className} font-normal text-xl text-textColor mt-10`}
      >
        I have done core Java course at Manfree technology,friendly staffs and
        good learning environment...the fees is also reasonable to compare other
        institutions. Each topics are clearly explained deeply...once the topics
        were completed they conduct many mocks.i&lsquo;m thankful to this
        institute.I got placed Ancit tech pvt.
      </p>
    </div>
  );
};

export default ReviewCard;
