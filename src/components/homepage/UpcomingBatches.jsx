import { poppins, rubik } from "@/app/font";
import upcomingOne from "@/assets/upcomingOne.svg";
import upcomingTwo from "@/assets/upcomingTwo.svg";
import upcomingThree from "@/assets/upcomingThree.svg";
import upcomingFour from "@/assets/upcomingFour.svg";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import UpcomingBatchesSection from "../UpcomingBatchesSection";
import { useGetAllBatches } from "@/features/batch/batch.hooks";

const UpcomingBatches = () => {
  const { data } = useGetAllBatches();
  console.log(data);

  const filler = [
    {
      icon: upcomingOne,
      title: "Limited Batch Size",
    },
    {
      icon: upcomingTwo,
      title: "Individual attention",
    },
    {
      icon: upcomingThree,
      title: "Awesome Peer group",
    },
    {
      icon: upcomingFour,
      title: "Continues feedback & monitoring ",
    },
  ];

  return (
    <div
      className={`grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-20 sm:px-20 px-5 md:px-5 lg:px-20`}
    >
      <div>
        <h1
          className={`${rubik.className} font-semibold text-secondary sm:text-2xl text-xl md:text-xl lg:text-2xl`}
        >
          Upcoming Batches
        </h1>
        <p
          className={`${rubik.className} sm:text-4xl text-3xl md:text-3xl lg:text-4xl font-semibold text-primary mt-3`}
        >
          Secure Your Spot in Our Next Class
        </p>
        <div className="space-y-7 mt-5">
          {filler.map((item, index) => (
            <div key={index} className="flex gap-3">
              <Image src={item.icon} className="h-8 w-8" alt="batches" />
              <h1
                className={`${poppins.className} font-normal sm:text-2xl text-xl md:text-xl lg:text-2xl text-textColor`}
              >
                {item.title}
              </h1>
            </div>
          ))}
          <Link
            className={`flex gap-3 ${poppins.className} sm:text-xl text-lg md:text-lg lg:text-xl font-medium text-secondary`}
            href={`/courses`}
          >
            View All <ArrowLongRightIcon className="h-7 w-7 text-secondary" />
          </Link>
        </div>
      </div>
      <div className="shadow-xl rounded-md sm:p-10 p-5 md:p-5 lg:p-10 space-y-7 sm:mt-0 mt-10 md:mt-10 lg:mt-0">
        {data?.slice(0, 3)?.map((item, index) => (
          <UpcomingBatchesSection data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingBatches;
