import { rubik } from "@/app/font";
import { formattedDate } from "@/utils/dateFormat";
import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const UpcomingBatchCard = ({ data }) => {
  return (
    <div className="relative">
      <div
        className={`px-2 capitalize text-sm  border ${
          data?.mode == "offline"
            ? "border-red-600 text-red-600"
            : "border-green-500 text-green-500"
        }  rounded-full  text-[20px] font-normal absolute right-3 top-8`}
      >
        {data?.mode}
      </div>
      <div className="mt-5  pr-5 pl-10 pb-5 pt-8 rounded-3xl grid grid-cols-2 gap-5 shadow-md border">
        <div className="col-span-1">
          {/* <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Date
          </h1> */}
          <div className="flex gap-2 items-center mt-3">
            <CalendarDaysIcon className="h-6 w-6 text-[#183D6D]" />
            <h1
              className={`${rubik.className} text-[#797A84] text-lg font-normal`}
            >
              {data && formattedDate(data?.date)}
            </h1>
          </div>
        </div>
        <div>
          {/* <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Duration
          </h1> */}
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
          {/* <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Location
          </h1> */}
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
          {/* <h1
            className={`${rubik.className} font-semibold text-[24px] text-[#0C7D81]`}
          >
            Batch
          </h1> */}
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
