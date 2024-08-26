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
      <div className="sm:p-20 p-5 md:p-5 lg:p-20">
        <div className="bg-gradient-to-r from-[#001424] to-[#004D8A] flex justify-between gap-5 sm:flex-row flex-col md:flex-row lg:flex-row sm:px-20 px-5 md:px-5 lg:px-20 sm:py-16 py-5 md:py-5 lg:py-16 rounded-lg">
          <div
            className={`${rubik.className} font-semibold sm:text-4xl text-2xl md:text-2xl lg:text-4xl text-white`}
          >
            <p className="leading-relaxed">
              Jumpstart Your Learning Journey <br className="sm:block hidden" />
              with a<span className="text-[#FF9A53]"> Free Trial Class</span>
            </p>
          </div>
          <button
            className={`${rubik.className} font-semibold flex gap-2 items-center sm:text-3xl text-2xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#FF9A53] to-[#FFCF53] sm:px-8 px-4 md:px-4 lg:px-8 py-4 self-center rounded-xl`}
          >
            Book Now
            <ChevronDoubleRightIcon className="sm:h-9 h-5 md:h-5 lg:h-9 w-9 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
