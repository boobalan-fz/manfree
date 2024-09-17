import { poppins, rubik } from "@/app/font";
import { onlyDate, onlyMonth } from "@/utils/dateFormat";
import { MapPinIcon } from "@heroicons/react/24/outline";

const UpcomingBatchesSection = ({ data }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-start gap-2">
        <h1
          className={`${poppins.className} font-normal capitalize text-base text-primary border px-2 py-1 border-primary rounded-full`}
        >
          {data?.mode}
        </h1>
        <h1
          className={`${rubik.className} font-semibold text-primary sm:text-2xl text-xl md:text-xl lg:text-2xl`}
        >
          {data?.course.name}
        </h1>
        <div className="flex items-center gap-3 ">
          <MapPinIcon className="h-7 w-7 text-primary" />
          <h1
            className={`${poppins.className} font-normal text-textColor sm:text-2xl text-xl md:text-xl lg:text-2xl `}
          >
            {data?.location}
          </h1>
        </div>
      </div>
      <div>
        <h1
          className={`${rubik.className} font-semibold text-primary sm:text-4xl text-3xl md:text-3xl lg:text-4xl`}
        >
          {data && onlyDate(data?.date)}
        </h1>
        <h1
          className={`${rubik.className} text-textColor sm:text-3xl text-2xl md:text-2xl lg:text-3xl font-medium`}
        >
          {data && onlyMonth(data?.date)}
        </h1>
      </div>
    </div>
  );
};

export default UpcomingBatchesSection;
