import { poppins, rubik } from "@/app/font";
import skillBg from "@/assets/skillbg.png";
import skillone from "@/assets/skillone.png";
import skilltwo from "@/assets/skilltwo.png";
import skillthree from "@/assets/skillthree.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const SkillToNextLevel = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${skillBg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="sm:p-20 p-5 md:p-5 lg:p-20 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10"
    >
      <div className={`flex flex-col gap-10`}>
        <h1
          className={`${rubik.className} font-semibold sm:text-4xl text-3xl md:text-3xl lg:text-4xl text-primary`}
        >
          Take Your Skills To The Next Level{" "}
        </h1>
        <div className="space-y-5">
          <p
            className={`${poppins.className} font-normal sm:text-xl text-lg md:text-lg lg:text-xl text-textColor`}
          >
            Empowering learners through hands-on training and expert guidance.
            Unlock potential with industry-relevant skills and innovative
            learning.
          </p>
          <ul
            className={`${poppins.className} text-textColor sm:text-xl text-lg md:text-lg lg:text-xl font-normal list-disc ml-5 space-y-2`}
          >
            <li>Cutting-Edge Training Programs</li>
            <li>Job Placement Support </li>
            <li>Supportive Learning Environment</li>
          </ul>
        </div>
        <Link
          href={`/courses`}
          className={`${poppins.className} sm:text-xl text-lg md:text-lg lg:text-xl font-medium text-secondary flex gap-2`}
        >
          View All Courses{" "}
          <ArrowLongRightIcon className="h-7 w-7 text-secondary" />
        </Link>
      </div>
      <div className="flex gap-5 sm:order-none -order-1 md:-order-1 lg:order-none">
        <div>
          <Image src={skillone} className="rounded-lg h-full" alt="skill" />
        </div>
        <div className="flex flex-col gap-5">
          <Image src={skilltwo} className="rounded-lg" alt="skill" />
          <Image src={skillthree} className="rounded-lg" alt="skill" />
        </div>
      </div>
    </div>
  );
};

export default SkillToNextLevel;
