import { poppins, rubik } from "@/app/font";
import CoreValue from "@/components/aboutPage/CoreValue";
import SuccessfullStories from "@/components/aboutPage/SuccessfullStories";
import WhyUsAbout from "@/components/aboutPage/WhyUsAbout";
import CourseTitle from "@/components/course/CourseTitle";
import AboutUs from "@/components/homepage/AboutUs";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div>
      <CourseTitle title={"About us"} />
      <AboutUs />
      <WhyUsAbout />
      <SuccessfullStories />
      <CoreValue />
      <div className="p-20">
        <div className="bg-gradient-to-r from-[#001424] to-[#004D8A] flex justify-between px-20 py-16 rounded-lg">
          <div
            className={`${rubik.className} font-semibold text-4xl text-white`}
          >
            <p>Jumpstart Your Learning Journey</p>
            <p className="mt-3">
              with a<span className="text-[#FF9A53]"> Free Trial Class</span>
            </p>
          </div>
          <button
            className={`${rubik.className} font-semibold flex gap-2 items-center text-3xl bg-gradient-to-r from-[#FF9A53] to-[#FFCF53] px-8 py-4 self-center rounded-xl`}
          >
            Book Now
            <ChevronDoubleRightIcon className="h-9 w-9 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
