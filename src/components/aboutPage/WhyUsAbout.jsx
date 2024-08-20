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
      className="mt-10 p-20 bg-[#EFF5FF]"
    >
      <div className="text-center">
        <h1
          className={`font-semibold text-xl text-[#FF9A53] ${poppins.className}`}
        >
          Why Us
        </h1>
        <p className={`text-3xl font-semibold ${rubik.className} mt-5`}>
          Delivering Quality, Affordable, and Engaging Learning Experiences
        </p>
      </div>
      <div className="mt-10 max-w-screen-2xl mx-auto grid grid-cols-2 ">
        <div className={`text-textColor text-xl ${poppins.className}`}>
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
              className="flex  items-center  gap-5 bg-white rounded-lg pr-10 border border-primary"
            >
              <div className="bg-primary p-4 rounded-lg">
                <Image src={item.icon} />
              </div>
              <h1
                className={`${rubik.className} text-2xl font-semibold text-primary`}
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
