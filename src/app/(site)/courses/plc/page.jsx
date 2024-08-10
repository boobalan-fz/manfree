"use client";
import { poppins, rubik } from "@/app/font";
import CourseTitle from "@/components/course/CourseTitle";
import Image from "next/image";
import image from "@/assets/image.png";
import tikicon from "@/assets/tick.svg";
import {
  courseIncludes,
  wywlForPlcProgrammer,
  plcProgrammer,
  faqPlc,
} from "@/constant/dummy";
import FaqDisclosure from "@/components/course/FaqDisclosure";
import Disclosure from "@/components/course/Disclosure";
import { useGetCourse } from "@/features/course/course.hooks";
import UpcomingBatchCard from "@/components/course/UpcomingBatchCard";

const Page = () => {
  const { data } = useGetCourse("66b6028286bde535898fdc64");

  return (
    <div className="">
      <CourseTitle title="Certified PLC programmer" />
      <div className=" max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 sm:px-20 px-4 sm:gap-20 ">
          <div className="py-4 sm:col-span-3">
            {/* course description */}
            <div className="pt-8">
              <h1
                className={`${rubik.className} text-4xl  font-semibold text-[#183D6D]`}
              >
                Course Description
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Not yet given
              </p>
            </div>

            {/* what you will learn */}
            <div className="py-8">
              <h1
                className={`${rubik.className} text-4xl  font-semibold text-[#183D6D]`}
              >
                What you will learn
              </h1>
              <ul className="pt-4 flex flex-col gap-4 justify-center">
                {wywlForPlcProgrammer.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start pr-10  ">
                    <Image
                      src={tikicon}
                      alt="img"
                      className="h-4 w-4 mt-[1px]"
                    />
                    <p
                      className={`${poppins.className} text-[#797A84] text-sm `}
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
                className={`${rubik.className} text-4xl  font-semibold text-[#183D6D]`}
              >
                Course Content
              </h1>

              <ul className="flex  flex-col gap-4 pt-8">
                {plcProgrammer.map((item, index) => (
                  <Disclosure key={index} data={item} />
                ))}
              </ul>
            </div>

            {/* job oppurtuintes */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-4xl  font-semibold text-[#183D6D]`}
              >
                PLC Programmer Job Opportunities
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Industrial Automation engineer or PLC programmer is a core
                industry job which is always in high demand with growing
                automation needs in industries. Students will end up with a
                Control Panel Engineer, PLC programmer, Automation Engineer or a
                PLC maintenance engineer in Industrial Automation Panel
                Builders, Automation Product dealers, or at manufacturing
                industries. Also can become a PLC programmer or Automation
                engineer in MNC&apos;s like Siemens, AB, ABB, Delta, Mitsubishi,
                Schneider Electric, Fuji, Omron etc. Over a period of time with
                good experience in PLC programming and Control Panel there is a
                high chance to be a PLC programming freelancer or entrepreneur
              </p>
            </div>

            {/* pre-requisite */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-4xl  font-semibold text-[#183D6D]`}
              >
                Pre-Requisite
              </h1>
              <p
                className={`${poppins.className} text-[#797A84] text-justify text-base pt-5`}
              >
                Should have good knowledge in Electrical and Electronics
                concepts, Sensors, Drives & controls. Minimum experience in
                Panel board wiring and designing is preferrable
              </p>
            </div>

            {/* who is this course*/}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-4xl  font-semibold text-[#183D6D]`}
              >
                Who is this course for ?
              </h1>
              <ul
                className={`${poppins.className} text-[#797A84] list-disc ml-5 text-justify text-base pt-5 sm:pr-52 space-y-3 `}
              >
                <li>
                  Industrial Automation/PLC Job Seekers (ME/BE/Diploma passed
                  out students & one who is working in Panel Board)
                </li>
                <li>
                  Business Persons (to explore PLC & HMI programming in details
                  and looking for PLC Panel or Project development)
                </li>
                <li>
                  Working Professionals (Individuals working in electrical,
                  mechanical, automation, or control engineering often pursue
                  PLC courses to enhance their skills in industrial automation
                  and process control. )
                </li>
                <li>
                  Individuals with an interest in automation, robotics, and
                  electronics may pursue PLC courses to expand their knowledge
                  and work on personal or small-scale projects.
                </li>
              </ul>
            </div>

            {/* faq */}
            <div className="pb-8">
              <h1
                className={`${rubik.className} text-4xl  font-semibold text-[#183D6D]`}
              >
                FAQ related to this course
              </h1>

              <ul className=" pt-8">
                {faqPlc.map((item, index) => (
                  <FaqDisclosure data={item} key={index} />
                ))}
              </ul>
            </div>
            {data?.batches.length > 0 && (
              <div>
                <h1
                  className={`${rubik.className} font-semibold text-4xl text-[#183D6D]`}
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
              className={` -mt-[120px] top-0 sm:sticky rounded drop-shadow-xl bg-white transition-opacity duration-[80ms] w-[380px] lg:w-[440px]    sm:shadow-lg sm:opacity-100 sm:transform sm:translate-y-0 sm:scale-100 sm:transition-none sm:duration-0 sm:ease-in-out`}
            >
              <div className="  p-6">
                <div className="bg-[#F1F1F1] flex items-center justify-center rounded-md px-24 py-24">
                  <Image src={image} alt="dummy" className="w-24 h-16" />
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
                    className={`${rubik.className} hidden sm:block bg-[#183D6D] mt-5 text-[#FF9A53] rounded-lg text-center py-2 font-semibold w-full text-lg`}
                  >
                    Join Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`${rubik.className} fixed bottom-0 sm:hidden bg-[#183D6D] mt-2 text-[#FF9A53] rounded-lg text-center py-4 font-semibold w-full text-lg`}
      >
        Join Course
      </button>
    </div>
  );
};

export default Page;
