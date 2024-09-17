import { rubik } from "@/app/font";
import CoreValue from "@/components/aboutPage/CoreValue";
import SuccessfullStories from "@/components/aboutPage/SuccessfullStories";
import dummy from "@/assets/aboutImage.png";
import WhyUsAbout from "@/components/aboutPage/WhyUsAbout";
import CourseTitle from "@/components/course/CourseTitle";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <CourseTitle title={"About us"} />
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2  sm:gap-20 gap-10 md:gap-10 lg:gap-20 py-10 px-5 max-w-screen-lg mx-auto justify-center items-center">
        <div className="">
          <Image src={dummy} />
        </div>
        <p>
          Manfree Technologies is a prominent technical training institute and
          product development company located in Coimbatore. Established in
          2012, we offer training in Industrial Automation, Embedded Systems,
          PCB designing, C, C++, Python, and various other fields. Our main
          objective is to groom students as competent professionals ready for
          industry roles, and facilitate their placement based on their skills.
          Additionally, we are actively involved in Research and Development
          (R&D), Embedded Products, IoT Solutions, PLC programming, and Panel
          Board Manufacturing customized to meet customer requirements.
        </p>
      </div>
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
          <Link
            href={`/contact`}
            className={`${rubik.className} font-semibold flex gap-2 items-center sm:text-3xl text-2xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#FF9A53] to-[#FFCF53] sm:px-8 px-4 md:px-4 lg:px-8 py-4 self-center rounded-xl`}
          >
            Book Now
            <ChevronDoubleRightIcon className="sm:h-9 h-5 md:h-5 lg:h-9 w-9 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
