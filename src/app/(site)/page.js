import Image from "next/image";
import computer from "@/assets/computer.jpg";
import embeddedpic from "@/assets/embeddedpic.jpg";
import robot from "@/assets/robot.jpg";
import servo from "@/assets/servo.jpg";
import motor from "@/assets/motor.jpg";
import inventor from "@/assets/inventor.jpg";
import review from "@/assets/reviewBg.png";
import trail from "@/assets/freeTrial.png";
import CourseCard from "@/components/homepage/CourseCard";
import LatestBlog from "@/components/homepage/LatestBlog";
import {
  ArrowLongRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { poppins, rubik } from "@/app/font";
import blog from "@/assets/blogs.png";
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
import ReviewCard from "@/components/homepage/ReviewCard";
import SkillToNextLevel from "@/components/homepage/SkillToNextLevel";
import UpcomingBatches from "@/components/homepage/UpcomingBatches";

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
      <div className=" p-20">
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
      {/* Skill to next level */}

      <div>
        <SkillToNextLevel />
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
      <div
        style={{
          backgroundImage: `url(${blog.src})`,
        }}
        className=" p-20 bg-[#EFF5FF]"
      >
        <div className="text-center">
          <h1
            className={`${rubik.className} text-2xl font-semibold text-secondary`}
          >
            Latest from our blogs
          </h1>
          <h1
            className={`${rubik.className} text-4xl  font-semibold text-primary mt-3`}
          >
            Stay Informed with Our Latest Insights
          </h1>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
          {latest?.map((item, index) => (
            <LatestBlog data={item} key={index} />
          ))}
        </div>
      </div>
      <div>
        <UpcomingBatches />
      </div>
      <div>
        <UpcomingEvents />
      </div>
      <div className="py-20">
        <h1 className=" text-4xl text-center  sm:text-5xl font-semibold  text-[#183D6D] ">
          Our Students Work In
        </h1>
        <Marquee />
      </div>
      <div
        style={{
          backgroundImage: `url(${review.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        className="px-20 pb-20"
      >
        <div className={`text-center`}>
          <h1
            className={`${rubik.className} font-semibold text-secondary text-2xl`}
          >
            Reviews
          </h1>
          <p
            className={`mt-3 ${rubik.className} text-4xl font-semibold text-primary`}
          >
            See What Our Learners Are Saying
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="px-20 py-10 grid grid-cols-2 gap-10 ">
        <Image src={trail} />
        <div className="self-center flex flex-col gap-10">
          <h1
            className={`${rubik.className} font-semibold text-6xl text-primary`}
          >
            Free Trial Class Available
          </h1>
          <p
            className={`${poppins.className} font-normal text-2xl text-textColor`}
          >
            Innovative courses and expert guidance. Gain practical skills for
            high-demand fields. Our experienced instructors ensure comprehensive
            learning. Join us and advance your career with confidence.
          </p>
          <button
            className={`${rubik.className} font-semibold flex gap-2 items-center text-3xl bg-gradient-to-r from-[#FF9A53] to-[#FFCF53] px-8 py-4 self-start rounded-xl`}
          >
            Book Now
            <ChevronDoubleRightIcon className="h-9 w-9 " />
          </button>
        </div>
      </div>
    </div>
  );
}
