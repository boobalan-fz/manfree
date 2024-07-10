import Image from "next/image";
import computer from "@/assets/computer.jpg";
import embeddedpic from "@/assets/embeddedpic.jpg";
import robot from "@/assets/robot.jpg";
import servo from "@/assets/servo.jpg";
import motor from "@/assets/motor.jpg";
import inventor from "@/assets/inventor.jpg";
import CourseCard from "@/components/homepage/CourseCard";
import LatestBlog from "@/components/homepage/LatestBlog";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { roboto_flex, rubik } from "@/app/font";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AboutUs from "@/components/homepage/AboutUs";
import HomeBanner from "@/components/homepage/HomeBanner";
import SpecialCard from "@/components/homepage/SpecialCard";
import training from "@/assets/specializtions/training.svg";
import productdevelopment from "@/assets/specializtions/productdevelopment.svg";
import pcb from "@/assets/specializtions/pcb.svg";
import automationproduct from "@/assets/specializtions/automationproduct.svg";
import corparate from "@/assets/specializtions/corparate.svg";
import image from "@/assets/image.png";

const SpecialCardData = [
  {
    title: "Training",
    content:
      "Master skills in Industrial Automation, Embedded Systems, and Software Development with our hands-on courses. Elevate your career with expert-led training at Manfree Technologies.",
    img: training,
  },
  {
    title: "Product Development",
    content:
      "Create custom solutions with our expert product development in PIC, STM 32, and Arduino microcontrollers.",
    img: productdevelopment,
  },
  {
    title: "Automation Projects",
    content:
      "Achieve efficiency with our expertise in PLC automation, programming, and VFD installation.",
    img: automationproduct,
  },
  {
    title: "Corporate Training",
    content:
      "Empower your team with our tailored corporate training in automation, embedded systems, and software development.",
    img: corparate,
  },
  {
    title: "PCB Design",
    content:
      "Get precision and reliability with our custom PCB design and development services.",
    img: pcb,
  },
  {
    title: "Placements",
    content:
      "Our specialized courses offer robust placement support with leading companies, including resume building, interview preparation, and direct job placements to kickstart your career.",
    img: pcb,
  },
];

const data = [
  {
    title: "PLC Automation and Programming",
    description:
      "Streamline operations with expert PLC automation and programming.",
    img: computer,
  },
  {
    title: "Embedded Systems Development",
    description:
      "Innovate and integrate with our advanced embedded systems training.",
    img: embeddedpic,
  },
  {
    title: "VFD and Servo Installation",
    description:
      "Optimize performance with precision VFD and servo installation.",
    img: robot,
  },
  {
    title: "Software Development",
    description:
      "Build the future with versatile software skills in Java, Python, and more.",
    img: servo,
  },
  {
    title: "Industrial Automation",
    description:
      "Drive efficiency and innovation through tailored automation solutions.",
    img: motor,
  },
  {
    title: "IoT (Internet of Things)",
    description:
      "IoT solutions for a connected world. Innovate with smart devices and data-driven insights.",
    img: inventor,
  },
];

const latest = [
  {
    title: "Automation",
    description:
      "Introduction to PLC Programming: Getting Started with Automation.",
  },
  {
    title: "Python",
    description:
      "Introduction to PLC Programming: Getting Started with Automation.",
  },
  {
    title: "IoT",
    description:
      "Python for Data Analysis: Applications in IoT and Automation.",
  },
];

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

            <button className="pt-4 flex  text-[#FF9A53] text-sm items-center justify-center">
              View All <ArrowRightIcon className="w-4 h-4" />
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
          View Events <ArrowLongRightIcon className="h-5 w-5 mt-[1px]" />
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
    </div>
  );
}
