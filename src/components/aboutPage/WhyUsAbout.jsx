import { poppins, rubik } from "@/app/font";
import why from "@/assets/aboutUs/whyUs.png";
import career from "@/assets/aboutUs/Career.svg";
import affordable from "@/assets/aboutUs/affordable.svg";
import mentors from "@/assets/aboutUs/mentors.svg";
import placement from "@/assets/aboutUs/placement.svg";
import Image from "next/image";

const WhyUsAbout = () => {
  const whyUs = [
    {
      icon: career,
      title: "Career Oriented",
    },
    {
      icon: placement,
      title: "Placement Support",
    },
    {
      icon: mentors,
      title: "Experienced Mentors",
    },
    {
      icon: affordable,
      title: "Affordable",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${why.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" sm:p-20 p-5 md:p-5 lg:p-20 bg-[#EFF5FF]"
    >
      <div className="text-center">
        <h1
          className={`font-semibold sm:text-xl text-lg md:text-lg lg:text-xl text-[#FF9A53] ${poppins.className}`}
        >
          Why Us
        </h1>
        <p
          className={`sm:text-3xl text-2xl md:text-2xl lg:text-3xl font-semibold ${rubik.className} mt-5`}
        >
          Delivering Quality, Affordable, and Engaging Learning Experiences
        </p>
      </div>
      <div className="mt-10 max-w-screen-2xl mx-auto grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 gap-10 md:gap-10 lg:gap-0">
        <div
          className={`text-textColor sm:text-xl text-lg md:text-lg lg:text-xl ${poppins.className}`}
        >
          <h1>
            In Manfree, air16573 we create high quality, affordable,
            interactive, and accessible learning experience.
          </h1>
          <ul className="mt-5 space-y-3 list-disc ml-5">
            <li>Learn in-demand skills</li>
            <li>Choose a schedule that works for you</li>
            <li>Exceptionally unique experience tailored to you</li>
            <li>
              Cultivate professional skills alongside our Career Success team
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className="flex  items-center  gap-5 bg-white rounded-xl pr-10 border border-primary"
            >
              <div className="bg-primary sm:p-4 p-2 rounded-lg">
                <Image
                  src={item.icon}
                  className="h-12 w-12 sm:h-auto sm:w-auto"
                />
              </div>
              <h1
                className={`${rubik.className} sm:text-2xl text-xl md:text-xl lg:text-2xl font-semibold text-primary`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsAbout;
