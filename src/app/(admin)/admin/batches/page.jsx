"use client";
import { useDeleteBatch, useGetAllBatches } from "@/features/batch/batch.hooks";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const Page = () => {
  const { data } = useGetAllBatches();
  const { mutate } = useDeleteBatch();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Batches</h1>
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md font-medium text-base">
          Add Batch
        </button>
      </div>
      <div className="mt-5">
        <table className="min-w-full divide-y divide-gray-300 rounded-md ">
          <thead className="bg-slate-100">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
              >
                Course Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Duration
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Location
              </th>
              <th
                scope="col"
                className="relative py-3.5 pl-3 pr-4 sm:pr-3"
              ></th>
              <th
                scope="col"
                className="relative py-3.5 pl-3 pr-4 sm:pr-3"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data?.map((batch) => (
              <tr key={batch._id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                  {batch?.course?.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {batch?.start_time} - {batch?.end_time}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {batch.date}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {batch.location}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-500">
                  <PencilIcon className="h-5 w-5 text-blue-500" />
                </td>
                <td className="whitespace-nowrap px-3 py-4  text-sm font-medium text-gray-500 sm:pr-6 lg:pr-8">
                  <TrashIcon
                    className="h-5 w-5 text-red-500"
                    onClick={() => mutate(batch?._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
