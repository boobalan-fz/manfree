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
import { poppins, roboto_flex, rubik } from "@/app/font";
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
import Marquee from "@/components/homepage/Marquee";
import Link from "next/link";
import { courses } from "@/constant/dummy";
import UpcomingEvents from "@/components/homepage/UpcomingEvents";

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
    href: "/courses/plc",
    img: computer,
  },
  {
    title: "Embedded Systems Development",
    description:
      "Innovate and integrate with our advanced embedded systems training.",
    href: "/courses/embedded",
    img: embeddedpic,
  },
  {
    title: "VFD and Servo Installation",
    description:
      "Optimize performance with precision VFD and servo installation.",
    href: "/courses/vfd",
    img: robot,
  },
  {
    title: "Software Development",
    description:
      "Build the future with versatile software skills in Java, Python, and more.",
    href: "/courses/software",
    img: servo,
  },
  {
    title: "Industrial Automation",
    description:
      "Drive efficiency and innovation through tailored automation solutions.",
    href: "/courses/industrialAssociate",
    img: motor,
  },
  {
    title: "IoT (Internet of Things)",
    description:
      "IoT solutions for a connected world. Innovate with smart devices and data-driven insights.",
    href: "/courses/iot",
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
      <div className={` bg-[#F5F9FB] px-8 py-10 sm:px-20 sm:py-14`}>
        <h1
          className={`${rubik.className} font-semibold text-xl text-center  sm:text-2xl   text-[#FF9A53]`}
        >
          Specializations
        </h1>
        <p
          className={`${rubik.className} font-semibold text-3xl text-center  sm:text-4xl   text-primary mt-3`}
        >
          Master Your Future with Expert Training
        </p>
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
      <div className=" py-5 px-10 md:px-10 lg:px-20 sm:px-0">
        <h1
          className={`${rubik.className}  text-2xl text-center font-semibold text-secondary`}
        >
          Popular courses
        </h1>
        <p
          className={`${rubik.className} text-4xl text-center font-semibold text-primary mt-3`}
        >
          Unlock Your Potential with Our Top Courses
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pt-12">
          {courses
            ?.filter((item) => item?.populare === true)
            .map((item, index) => (
              <CourseCard data={item} key={index} />
            ))}
        </div>
        <Link
          href={`/courses`}
          className="text-[#FF9A53]  flex gap-2 items-center justify-end hover:underline  mt-2 w-full"
        >
          View All <ArrowLongRightIcon className="h-5 w-5 mt-[1px]" />
        </Link>
      </div>
      <div className="px-8 py-4 sm:px-20 sm:py-12  grid grid-cols-2 gap-8">
        <div>
          <h1
            className={`${rubik.className} text-secondary font-semibold text-2xl `}
          >
            Recent Works
          </h1>
          <p
            className={`${rubik.className} text-primary font-semibold text-4xl mt-3`}
          >
            Showcasing Our Latest Achievements
          </p>
          <div className={`${poppins.className} pt-6`}>
            <p className="text-textColor  text-xl font-normal">
              In addition to training, we specialize in projects for Industrial
              Automation and Embedded Systems. Our portfolio includes Automation
              Panel Boards, PLC programming, Embedded solutions, and IoT
              applications tailored to meet diverse client needs. We have
              successfully developed products from inception to implementation,
              including feature enhancements. Here are some highlights of our
              successful projects and product developments.
            </p>

            <button className="pt-4 flex gap-4  text-secondary text-xl items-center ">
              View All <ArrowLongRightIcon className="w-7 h-7" />
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
      <div>
        <UpcomingEvents />
      </div>
      <div className="mx-16 py-5 px-10 md:px-10 lg:px-0 sm:px-0 ">
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
      <div className="py-5 px-10 md:px-10 lg:px-0 sm:px-0">
        <h1 className=" text-4xl text-center  sm:text-5xl font-semibold  text-[#183D6D] ">
          Our Students Work In
        </h1>
        <Marquee />
      </div>
    </div>
  );
}
