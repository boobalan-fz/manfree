import { rubik } from "@/app/font";
import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const UpcomingBatchCard = ({ data }) => {
  return (
    <div className="relative">
      <div className="px-4 capitalize  border border-[#0C7D81] rounded-full text-[#0C7D81] text-[20px] font-normal absolute right-3 top-8">
        {data?.mode}
      </div>
      <div className="mt-5 bg-[#E2EFE4] pr-5 pl-10 pb-5 pt-10 rounded-3xl grid grid-cols-2 gap-5 ">
        <div>
          <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Date
          </h1>
          <div className="flex gap-2 items-center mt-3">
            <CalendarDaysIcon className="h-6 w-6 text-[#183D6D]" />
            <h1
              className={`${rubik.className} text-[#797A84] text-lg font-normal`}
            >
              {data?.date}
            </h1>
          </div>
        </div>
        <div>
          <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Duration
          </h1>
          <div className="flex gap-2 items-center mt-3">
            <ClockIcon className="h-6 w-6 text-[#183D6D]" />
            <h1
              className={`${rubik.className} text-[#797A84] text-lg font-normal`}
            >
              {data?.start_time} - {data?.end_time}
            </h1>
          </div>
        </div>
        <div>
          <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Location
          </h1>
          <div className="flex gap-2 items-center mt-3">
            <MapPinIcon className="h-6 w-6 text-[#183D6D]" />
            <h1
              className={`${rubik.className} text-[#797A84] text-lg font-normal`}
            >
              {data?.location}
            </h1>
          </div>
        </div>
        <div>
          <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Batch
          </h1>
          <div className="flex gap-2 items-center mt-3">
            <ClipboardDocumentCheckIcon className="h-6 w-6 text-[#183D6D]" />
            <h1
              className={`${rubik.className} text-[#797A84] text-lg font-normal capitalize`}
            >
              {data?.batch}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBatchCard;
