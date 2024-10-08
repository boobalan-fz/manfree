"use client";
import { poppins, rubik } from "@/app/font";
import CourseTitle from "@/components/course/CourseTitle";
import Image from "next/image";
import embeddedpic from "@/assets/embeddedpic.jpg";
import JoinCourseDialog from "@/components/common/JoinCourseDialog";
import tikicon from "@/assets/tick.svg";
import {
  courseIncludes,
  wywlForArduinoProgrammer,
  arduinoProgrammer,
  faqArduinoProgrammer,
} from "@/constant/dummy";
import FaqDisclosure from "@/components/course/FaqDisclosure";
import Disclosure from "@/components/course/Disclosure";
import { useGetCourse } from "@/features/course/course.hooks";
import UpcomingBatchCard from "@/components/course/UpcomingBatchCard";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetCourse("66b602cd86bde535898fdc6c");

  return (
    <div className="">
      <CourseTitle
        title="Certified Arduino & IoT Programmer"
        data
        module={10}
        hours={120}
      />
      <div className=" max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-1 lg:grid-cols-5 sm:px-20 px-5 md:px-5 lg:px-20 sm:gap-20 gap-5 md:gap-5 lg:gap-20 ">
          <div className="py-4 sm:col-span-3">
            {/* course description */}
            <div className="pt-8">
              <h1
                className={`${rubik.className} text-2xl   font-semibold text-[#183D6D]`}
              >
                Course Description
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Unlock the full potential of Arduino programming with this
                comprehensive course designed for all skill levels. Starting
                with the basics, you&apos;ll learn to write and upload code
                using the Arduino IDE, understand the fundamentals of
                electronics, and work with various sensors and actuators. The
                course includes hands-on projects that will help you create
                interactive and practical applications, from simple LED blinking
                to complex IoT devices.
              </p>
            </div>

            {/* what you will learn */}
            <div className="py-8">
              <h1
                className={`${rubik.className} text-2xl   font-semibold text-[#183D6D]`}
              >
                What you will learn
              </h1>
              <ul className="pt-4 flex flex-col gap-4 justify-center">
                {wywlForArduinoProgrammer.map((item, index) => (
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
                className={`${rubik.className} text-2xl   font-semibold text-[#183D6D]`}
              >
                Course Content
              </h1>

              <ul className="flex  flex-col gap-4 pt-8">
                {arduinoProgrammer.map((item, index) => (
                  <Disclosure key={index} data={item} />
                ))}
              </ul>
            </div>

            {/* job oppurtuintes */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-2xl   font-semibold text-[#183D6D]`}
              >
                Arduino Programmer Job Opportunities
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
                className={`${rubik.className} text-2xl   font-semibold text-[#183D6D]`}
              >
                Pre-Requisite
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Anyone who is interested in learning about electronics, embedded
                systems, and IoT (Internet of Things), and want to work on
                prototype or toy projects
              </p>
            </div>

            {/* who is this course*/}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-2xl   font-semibold text-[#183D6D]`}
              >
                Who is this course for ?
              </h1>
              <ul
                className={`${poppins.className} text-[#797A84] list-disc ml-5 text-justify text-base pt-5 sm:pr-52 space-y-3 `}
              >
                <li>School students (from 8th grade & above)</li>
                <li>
                  College students (anyone who is willing to explore electronics
                  & IoT)
                </li>
                <li>
                  Hobbyists and DIY Enthusiasts (Those interested in creating
                  their own electronic projects, from simple gadgets to more
                  complex interactive systems.)
                </li>
                <li>
                  Professionals (Engineers, technicians, teachers, instructors
                  and developers seeking to expand their knowledge and skills in
                  embedded systems, IoT, and prototyping)
                </li>
                <li>
                  Entrepreneurs (Innovators and startup founders interested in
                  prototyping and developing new electronic products and
                  devices)
                </li>
              </ul>
            </div>

            {/* faq */}
            <div className="">
              <h1
                className={`${rubik.className} text-2xl   font-semibold text-[#183D6D]`}
              >
                FAQ related to this course
              </h1>

              <ul className="pt-8">
                {faqArduinoProgrammer.map((item, index) => (
                  <FaqDisclosure data={item} key={index} />
                ))}
              </ul>
            </div>
            {data?.batches.length > 0 && (
              <div className="my-10">
                <h1
                  className={`${rubik.className} font-semibold text-2xl  text-[#183D6D]`}
                >
                  Upcoming Batches
                </h1>

                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 ">
                  {data?.batches.map((item, index) => (
                    <UpcomingBatchCard data={item} key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full  pb-4 sm:pb-0 sm:col-span-2 flex justify-center items-start">
            <div
              className={` sm:-mt-[120px] my-5 md:my-5 lg:-mt-[120px] top-0 sm:sticky hidden sm:block rounded drop-shadow-xl bg-white transition-opacity duration-[80ms] w-[380px] lg:w-[440px]    sm:shadow-lg sm:opacity-100 sm:transform sm:translate-y-0 sm:scale-100 sm:transition-none sm:duration-0 sm:ease-in-out`}
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
                    className={`${rubik.className}  bg-[#183D6D] mt-5 text-[#FF9A53] rounded-lg text-center py-2 font-semibold w-full text-lg cursor-pointer`}
                  >
                    Join Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden fixed bottom-0  w-full">
          <button
            onClick={() => setOpen(!open)}
            className={`${rubik.className}  bg-[#183D6D] text-[#FF9A53]  text-center py-2 font-semibold w-full text-lg cursor-pointer`}
          >
            Join Course
          </button>
        </div>
      </div>
      <JoinCourseDialog isOpen={open} close={() => setOpen(false)} />
    </div>
  );
};

export default Page;
