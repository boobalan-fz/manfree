import Image from "next/image";
import CourseCard from "@/components/homepage/CourseCard";
import LatestBlog from "@/components/homepage/LatestBlog";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { roboto_flex, rubik } from "@/app/font";
import AboutUs from "@/components/homepage/AboutUs";
import HomeBanner from "@/components/homepage/HomeBanner";
import SpecialCard from "@/components/homepage/SpecialCard";
import image from "@/assets/image.png";
import Review from "@/components/homepage/Review";
import { SpecialCardData, data, latest } from "@/constant/dummy";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutUs />
      <div
        className={`${roboto_flex.className} bg-[#F5F9FB] px-8 py-10 sm:px-16 sm:py-14`}
      >
        <h1 className=" text-4xl text-center  sm:text-5xl font-semibold  text-[#183D6D]">
          Specializations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-8 pt-12 ">
          {SpecialCardData.map((data, index) => (
            <SpecialCard
              key={index}
              title={data.title}
              img={data.img}
              content={data.content}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          background:
            "radial-gradient(82.09% 54.73% at 40.22% 49.46%, #0D3E64 10.7%, #0B365F 21.02%, #041048 72.79%, #01013F 100%)",
        }}
        className="px-8 py-4 sm:px-16 sm:py-12  grid grid-cols-2 gap-8"
      >
        <div>
          <h1 className={`${rubik.className} text-white font-medium text-5xl `}>
            Recent Works
          </h1>
          <div className={`${roboto_flex.className} pt-6`}>
            <p className="text-white leading-6 text-sm font-light tracking-wide">
              At Manfree Technologies, we excel in industrial automation with
              advanced PLC programming and VFD installations. We lead in
              embedded systems using PIC, ARM, and Arduino, and create IoT
              solutions with Raspberry Pi. Our software development spans Java,
              Python, React, and Node.js. We offer dynamic Raspberry Pi
              projects, precise PLC programming, efficient VFD installations,
              and custom PCB designs. Additionally, we provide corporate
              training and develop innovative, future-ready products.
            </p>

            <button className="pt-4 flex  gap-1 text-[#FF9A53] text-sm items-center justify-center">
              View All <ArrowLongRightIcon className="h-5 w-5 mt-[1px]" />
            </button>
          </div>
          <div className="grid grid-cols-2  gap-10 pt-8 w-full h-52">
            <div className="bg-white  flex rounded-sm items-center justify-center ">
              <Image src={image} className="w-10 h-10" alt="alt1" />
            </div>
            <div className="bg-white flex rounded-sm items-center justify-center ">
              <Image src={image} className="w-10 h-10" alt="alt-2" />
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-full flex rounded-sm items-center justify-center ">
          <Image src={image} alt="success" />
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto py-5 px-10 md:px-10 lg:px-0 sm:px-0">
        <h1 className="text-5xl text-center font-semibold text-[#183D6D] mb-10">
          Popular courses
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
          {data?.map((item, index) => (
            <CourseCard data={item} key={index} />
          ))}
        </div>
        <button className="text-[#FF9A53]  flex gap-2 items-center justify-end hover:underline  mt-2 w-full">
          View All <ArrowLongRightIcon className="h-5 w-5 mt-[1px]" />
        </button>
      </div>
      <div className="max-w-[85rem] mx-auto py-5 px-10 md:px-10 lg:px-0 sm:px-0 ">
        <h1 className="text-5xl text-center font-semibold text-[#183D6D] mb-10">
          Latest from our blogs
        </h1>
        <p className="text-center font-normal text-base mx-auto max-w-6xl">
          Explore our latest blog posts at Manfree Technologies covering
          cutting-edge topics in industrial automation, IoT innovations with
          Raspberry Pi, and the power of Python in data analysis and automation.
          Stay informed with practical insights and real-world applications to
          stay ahead in technology.
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-7">
          {latest?.map((item, index) => (
            <LatestBlog data={item} key={index} />
          ))}
        </div>
      </div>
      <div className={`px-8 py-10 sm:px-16 sm:py-14 `}>
        <h1
          className={`${rubik.className} text-4xl text-center  sm:text-5xl font-semibold  text-[#183D6D]`}
        >
          Reviews
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}
