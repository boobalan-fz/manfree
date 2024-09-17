"use client";
import { poppins, rubik } from "@/app/font";
import CourseTitle from "@/components/course/CourseTitle";
import Image from "next/image";
import embeddedpic from "@/assets/embeddedpic.jpg";
import tikicon from "@/assets/tick.svg";
import {
  courseIncludes,
  embeddedAssociate,
  faqEmbeddedProgrammer,
  wywlForEmbeddedProgrammer,
} from "@/constant/dummy";
import FaqDisclosure from "@/components/course/FaqDisclosure";
import Disclosure from "@/components/course/Disclosure";
import { useGetCourse } from "@/features/course/course.hooks";
import UpcomingBatchCard from "@/components/course/UpcomingBatchCard";
import JoinCourseDialog from "@/components/common/JoinCourseDialog";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetCourse("66b602ba86bde535898fdc6a");

  return (
    <div className="">
      <CourseTitle
        title="Certified Embedded Programmer"
        data
        module={7}
        hours={180}
      />
      <div className=" max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-1 lg:grid-cols-5 sm:px-20 px-5 md:px-5 lg:px-20 sm:gap-20 gap-5 md:gap-5 lg:gap-20 ">
          <div className="py-4 sm:col-span-3">
            {/* course description */}
            <div className="pt-8">
              <h1
                className={`${rubik.className} text-2xl  font-semibold text-[#183D6D]`}
              >
                Course Description
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Embedded Systems combine hardware and software, featuring
                electronic circuits with programmable chips like
                microcontrollers or microprocessors, to control and monitor
                applications. Using programming languages such as C, C++, and
                Python, these systems are essential in devices like digital
                watches, TVs, mobile phones, washing machines, microwaves,
                security cameras, traffic controllers, ATMs, home automation,
                E-vehicles, robotics, medical devices, IoT products, and
                automotive ECUs.
              </p>
            </div>

            {/* what you will learn */}
            <div className="py-8">
              <h1
                className={`${rubik.className} text-2xl  font-semibold text-[#183D6D]`}
              >
                What you will learn
              </h1>
              <ul className="pt-4 flex flex-col gap-4 justify-center">
                {wywlForEmbeddedProgrammer.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start pr-10  ">
                    <Image
                      src={tikicon}
                      alt="img"
                      className="h-4 w-4 mt-[1px]"
                    />
                    <p
                      className={`${poppins.className} text-[#797A84] text-base `}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* course content */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-2xl  font-semibold text-[#183D6D]`}
              >
                Course Content
              </h1>

              <ul className="flex  flex-col gap-4 pt-8">
                {embeddedAssociate.map((item, index) => (
                  <Disclosure key={index} data={item} />
                ))}
              </ul>
            </div>

            {/* job oppurtuintes */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-2xl  font-semibold text-[#183D6D]`}
              >
                Embedded Systems Job Opportunities
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Embedded systems are a core industry field with high demand and
                well-paid jobs. They play a crucial role in IoT, ML, AI, and
                Robotics. Careers include Embedded Hardware Engineer, Embedded
                Software Engineer, Robotics Engineer, Firmware Engineer, Systems
                Engineer, and Product Design Engineer, with opportunities at
                companies like Philips, Samsung, Siemens, Bosch, Continental,
                Valeo, KPIT, Infosys, Google and Amazon. With experience, one
                can also become a freelancer or entrepreneur in embedded
                programming and product development.
              </p>
            </div>

            {/* pre-requisite */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-2xl  font-semibold text-[#183D6D]`}
              >
                Pre-Requisite
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Anyone who is looking for a good embedded job or interested in
                business developing electronic products or embedded based
                projects and services.
              </p>
            </div>

            {/* who is this course*/}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-2xl  font-semibold text-[#183D6D]`}
              >
                Who is this course for ?
              </h1>
              <ul
                className={`${poppins.className} text-[#797A84] list-disc ml-5 text-justify text-base pt-5 sm:pr-52 space-y-3 `}
              >
                <li>
                  School students (Who completes 10th or 12th grade and planning
                  to join circuit branches in Polytechnic or Engineering
                  colleges)
                </li>
                <li>
                  College students (ME/BE/Msc/ Bsc/Diploma. Circuit branches are
                  more related)
                </li>
                <li>
                  Professionals (Working in PCB board assembly, PCB Testing,
                  Production, Lab technician, Service engineers, Hobbyists and
                  DIY Enthusiasts)
                </li>
                <li>
                  Entrepreneurs (to explore Embedded hardware and programming in
                  detail and looking for Project or Product development)
                </li>
              </ul>
            </div>

            {/* faq */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-2xl  font-semibold text-[#183D6D]`}
              >
                FAQ related to this course
              </h1>

              <ul className=" pt-8">
                {faqEmbeddedProgrammer.map((item, index) => (
                  <FaqDisclosure data={item} key={index} />
                ))}
              </ul>
            </div>
            {data?.batches.length > 0 && (
              <div>
                <h1
                  className={`${rubik.className} font-semibold text-2xl text-[#183D6D]`}
                >
                  Upcoming Batches
                </h1>

                {data?.batches.map((item, index) => (
                  <UpcomingBatchCard data={item} key={index} />
                ))}
              </div>
            )}
          </div>

          <div className="w-full  pb-4 sm:pb-0 sm:col-span-2 flex justify-center items-start">
            <div
              className={` sm:-mt-[120px] my-5 md:my-5 lg:-mt-[120px] top-0 sm:sticky rounded drop-shadow-xl hidden sm:block bg-white transition-opacity duration-[80ms] w-[380px] lg:w-[440px]    sm:shadow-lg sm:opacity-100 sm:transform sm:translate-y-0 sm:scale-100 sm:transition-none sm:duration-0 sm:ease-in-out`}
            >
              <div className="  p-6">
                <div className="bg-[#F1F1F1]  rounded-md ">
                  <Image src={embeddedpic} alt="dummy" className="rounded-md" />
                </div>
                <div className="mt-5">
                  <h3
                    className={`${rubik.className} font-semibold text-lg text-[#183D6D]`}
                  >
                    This Course Includes
                  </h3>
                  <ul className="flex flex-col items-start">
                    {courseIncludes.map((item, index) => (
                      <li key={index} className="flex gap-4 items-center pt-3 ">
                        <Image src={item.img} alt="img" className="w-6 h-6" />

                        <p
                          className={`${poppins.className} text-[#797A84] text-sm`}
                        >
                          {item.title}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setOpen(!open)}
                    className={`${rubik.className}  bg-[#183D6D] mt-5 text-[#FF9A53] rounded-lg text-center py-2 font-semibold w-full text-lg`}
                  >
                    Join Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden fixed bottom-0  w-full">
        <button
          onClick={() => setOpen(!open)}
          className={`${rubik.className}  bg-[#183D6D] text-[#FF9A53]  text-center py-2 font-semibold w-full text-lg`}
        >
          Join Course
        </button>
      </div>
      <JoinCourseDialog isOpen={open} close={() => setOpen(false)} />
    </div>
  );
};

export default Page;
