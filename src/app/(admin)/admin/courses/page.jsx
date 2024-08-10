"use client";
import AddCourseModal from "@/components/adminUI/AddCourseModal";
import {
  useDeleteCourse,
  useGetAllCourses,
} from "@/features/course/course.hooks";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Page = () => {
  const { data } = useGetAllCourses();
  const { mutate } = useDeleteCourse();
  let [isOpen, setIsOpen] = useState(false);
  const [courseId, setCourseId] = useState(null);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleEdit = (id) => {
    setCourseId(id);
    open();
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Courses</h1>
        <button
          onClick={open}
          className="px-3 py-2 bg-blue-500 text-white rounded-md font-medium text-base"
        >
          Add Course
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {data?.map((item, index) => (
          <div
            className="px-4 py-3 bg-slate-200 rounded-lg font-semibold text-lg flex justify-between items-center hover:scale-[1.01] cursor-pointer"
            key={index}
          >
            <div className="capitalize">{item.name}</div>
            <div className="flex gap-5 items-center">
              <PencilIcon
                className="h-5 w-5 text-blue-600"
                onClick={() => handleEdit(item?._id)}
              />
              <TrashIcon
                className="h-5 w-5 text-red-600"
                onClick={() => mutate(item?._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <AddCourseModal isOpen={isOpen} close={close} courseId={courseId} />
    </div>
  );
};

export default Page;
