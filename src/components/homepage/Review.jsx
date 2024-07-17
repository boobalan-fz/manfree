import Image from "next/image";
import { roboto_flex, rubik } from "@/app/font";
import star from "../../assets/star.svg";
const Review = () => {
  return (
    <div className="p-10 rounded-md shadow-xl drop-shadow-md">
      <div>
        <h1
          className={`${rubik.className} text-[#183D6D] font-semibold text-2xl text-left`}
        >
          Shalini Muruganantham
        </h1>
        <div className="flex gap-1 pt-2">
          {[...Array(5)].map((_, index) => (
            <Image src={star} alt="star" className="w-8 h-8" key={index} />
          ))}
        </div>
      </div>
      <p className={`${roboto_flex.className} leading-6 text-left pt-8`}>
        I have done core Java course at Manfree technology,friendly staffs and
        good learning environment...the fees is also reasonable to compare other
        institutions. Each topics are clearly explained deeply...once the topics
        were completed they conduct many mocks.i'm thankful to this institute.I
        got placed Ancit tech pvt.
      </p>
    </div>
  );
};

export default Review;
