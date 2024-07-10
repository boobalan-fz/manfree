import Image from "next/image";
import aboutUsImg from "@/assets/dummy.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto py-20  px-10 md:px-10 lg:px-0 sm:px-0">
        <h1 className="text-5xl  font-semibold text-[#183D6D] mb-10">
          About us
        </h1>
        <div className="flex items-center  gap-10 ">
          <Image
            src={aboutUsImg}
            alt="img"
            className="hidden sm:block md:hidden lg:block "
            width={700}
            height={700}
          />
          <div className="flex flex-col gap-5 items-start">
            <p className="text-base">
              Manfree Technologies is a leading technical training institute
              offering courses on Industrial Automation Solutions, Embedded
              controllers, Raspberry PI, and Software Applications. We have
              expertise in providing Industrial Automation Solutions such as PLC
              Automation, PLC Programming, PLC Panel Board Designing and Wiring,
              VFD and Servo Installation, etc., Embedded Solutions such as
              Project Guidance and Product Development in PIC/ARM/Arduino
              Microcontrollers based on customer requirements and Software
              application developments in various platforms like Java, React,
              Python, Node Js, Android, PHP, etc. <br />
              Embedded Solutions such as Project Guidance and Product
              Development in PIC/ARM/Arduino Microcontrollers based on customer
              requirements and Software application developments in various
              platforms like Java, React, Python, Node Js, Android, PHP, etc.
            </p>

            <button className="text-[#FF9A53] flex gap-2 items-center hover:underline">
              View Events <ArrowLongRightIcon className="h-5 w-5 mt-[1px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
