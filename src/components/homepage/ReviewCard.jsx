import { poppins, rubik } from "@/app/font";
import { StarIcon } from "@heroicons/react/24/outline";

const ReviewCard = () => {
  return (
    <div className="sm:p-10 p-6 md:p-6 lg:p-10 shadow-xl rounded-lg bg-white">
      <h1
        className={`${rubik.className} font-semibold sm:text-2xl text-xl md:text-xl lg:text-2xl text-primary`}
      >
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
        className={`${poppins.className} font-normal sm:text-xl text-lg md:text-lg lg:text-xl text-textColor sm:mt-10 mt-5 md:mt-5 lg:mt-10`}
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
