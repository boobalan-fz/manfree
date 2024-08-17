"use client";
import {
  useDeleteCourse,
  useGetAllCourses,
} from "@/features/course/course.hooks";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Page = () => {
  const { data } = useGetAllCourses();
  const { mutate } = useDeleteCourse();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Courses</h1>
        <Link
          href={`/admin/courses/add`}
          className="px-3 py-2 bg-blue-500 text-white rounded-md font-medium text-base"
        >
          Add Course
        </Link>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {data?.map((item, index) => (
          <div
            className="px-4 py-3 bg-slate-200 rounded-lg font-semibold text-lg flex justify-between items-center hover:scale-[1.01] cursor-pointer"
            key={index}
          >
            <div className="capitalize">{item.name}</div>
            <div className="flex gap-5 items-center">
              <Link href={`/admin/courses/${item?._id}`}>
                <PencilIcon className="h-5 w-5 text-blue-600" />
              </Link>
              <TrashIcon
                className="h-5 w-5 text-red-600"
                onClick={() => mutate(item?._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
