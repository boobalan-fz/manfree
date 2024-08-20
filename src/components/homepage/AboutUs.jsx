import aboutUsImg from "@/assets/aboutImage.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { poppins, rubik } from "@/app/font";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="pl-10 md:pl-10 lg:pl-20 sm:px-0">
        <div className="grid grid-cols-2  gap-10 relative overflow-hidden">
          <div className="flex flex-col gap-5 items-start py-20 pr-36 ">
            <h1
              className={`${rubik.className} text-[#FF9A53] text-2xl font-semibold`}
            >
              About Us
            </h1>
            <p
              className={`${rubik.className} text-primary text-4xl leading-relaxed font-semibold`}
            >
              Our Mission Is To Empower Innovative Learning For Brighter Future.
            </p>
            <p
              className={`${poppins.className} text-textColor text-xl font-normal`}
            >
              Manfree Technologies, founded in 2012 in Coimbatore, is a top
              technical training and product development company. We offer
              courses in Industrial Automation, Embedded Systems, PCB Design,
              and programming languages. We focus on industry-ready training and
              placement, along with R&D, IoT Solutions, and custom Panel Board
              Manufacturing.
            </p>
            <Link
              className={`text-[#FF9A53] text-xl ${poppins.className} font-normal flex items-center gap-2`}
              href={`/about`}
            >
              Learn more
              <ArrowLongRightIcon className={`h-6 w-6 text-[#FF9A53]`} />
            </Link>
          </div>

          <div>
            <Image
              src={aboutUsImg}
              className="skew-x-[-10deg] scale-[1.12] h-full object-contain object-center"
            />
          </div>

          <div className="absolute self-center left-[43%] shadow-md">
            <div className="px-10 py-5 bg-gradient-to-r from-[#183D6D] to-[#1155AC]  self-center w-[380px] rounded-xl">
              <h1
                className={`${rubik.className} font-semibold text-3xl text-white leading-relaxed text-center`}
              >
                “Celebrating <span className="text-secondary">10+ Years</span>{" "}
                of Excellence in Technical Training and Professional Growth”
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
