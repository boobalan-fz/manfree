import Image from "next/image";
import events from "@/assets/events.png";
import { poppins, rubik } from "@/app/font";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const UpcomingEvents = () => {
  return (
    <div className="py-12 px-20 bg-[#EFF5FF] grid grid-cols-1 sm:grid-cols-2 items-center">
      <Image src={events} alt="events" />
      <div>
        <h1
          className={`${rubik.className} text-secondary font-semibold text-2xl `}
        >
          Explore Events
        </h1>
        <p
          className={`${rubik.className} text-primary font-semibold text-4xl mt-5`}
        >
          Upcoming Events
        </p>
        <div className={`${poppins.className} pt-10`}>
          <p className="text-textColor  text-xl font-normal sm:w-[700px] w-auto">
            Join us for our upcoming events to explore the latest trends in
            technology and industry. Gain valuable insights, network with
            experts, and enhance your skills to stay ahead in your career.
            Don&lsquo;t miss out on these opportunities to grow and learn!
          </p>

          <button className="pt-10 flex gap-4  text-secondary text-xl items-center ">
            Explore Events <ArrowLongRightIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
