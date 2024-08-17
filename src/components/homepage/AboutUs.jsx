import Image from "next/image";
import aboutUsImg from "@/assets/dummy.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <div>
      <div className=" py-20  px-10 md:px-10 lg:px-20 sm:px-0">
        <div className="flex items-center  gap-10 ">
          <Image
            src={aboutUsImg}
            alt="img"
            className="hidden sm:block md:hidden lg:block "
            width={700}
            height={700}
          />
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xl">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
