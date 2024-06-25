import Image from "next/image";
import aboutUs from "@/assets/aboutUsBg.png";
import aboutUsImg from "@/assets/aboutUsImg.png";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutUs.src})`,
      }}
      className="bg-cover bg-center"
    >
      <div className="py-10">
        <h1 className="text-5xl text-center font-semibold text-[#FE9601]">
          About us
        </h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center sm:pt-20 sm:px-20 pt-10 px-10 gap-10">
          <Image
            src={aboutUsImg}
            alt="img"
            className="hidden sm:block md:hidden lg:block"
            width={700}
            height={700}
          />
          <div className="flex flex-col gap-10 items-start">
            <p className="text-base ">
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

            <button className="px-3 py-2 bg-[#4B86F3] rounded-md text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
