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
      className="p-20 grid grid-cols-2 gap-10"
    >
      <div className={`flex flex-col gap-10`}>
        <h1
          className={`${rubik.className} font-semibold text-4xl text-primary`}
        >
          Take Your Skills To The Next Level{" "}
        </h1>
        <div className="space-y-5">
          <p
            className={`${poppins.className} font-normal text-xl text-textColor`}
          >
            Empowering learners through hands-on training and expert guidance.
            Unlock potential with industry-relevant skills and innovative
            learning.
          </p>
          <ul
            className={`${poppins.className} text-textColor text-xl font-normal list-disc ml-5 space-y-2`}
          >
            <li>Cutting-Edge Training Programs</li>
            <li>Job Placement Support </li>
            <li>Supportive Learning Environment</li>
          </ul>
        </div>
        <Link
          href={`/courses`}
          className={`${poppins.className} text-xl font-medium text-secondary flex gap-2`}
        >
          View All Courses{" "}
          <ArrowLongRightIcon className="h-7 w-7 text-secondary" />
        </Link>
      </div>
      <div className="flex gap-5">
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
