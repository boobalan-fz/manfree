"use client";
import { rubik } from "@/app/font";
import CourseTitle from "@/components/course/CourseTitle";
import UpcomingBatchCard from "@/components/course/UpcomingBatchCard";
import { useGetAllBatches } from "@/features/batch/batch.hooks";
import { useMemo } from "react";

const Page = () => {
  const { data } = useGetAllBatches();

  const groupedBatches = useMemo(() => {
    const grouped = {};
    data?.forEach((batch) => {
      const courseId = batch.course._id;
      if (!grouped[courseId]) {
        grouped[courseId] = {
          courseName: batch.course.name,
          description: batch.course.description,
          batches: [],
        };
      }
      grouped[courseId].batches.push(batch);
    });
    return grouped;
  }, [data]);

  return (
    <div>
      <CourseTitle title={"All Batches"} />
      <div className="sm:px-20 px-5 md:px-5 lg:px-20">
        <div className="my-5">
          <h1
            className={`${rubik.className} text-2xl font-semibold text-primary`}
          >
            Course wise batches
          </h1>
        </div>

        <div className="grid grid-cols-1 ">
          {Object.values(groupedBatches)?.map((course, index) => (
            <div key={index} className=" rounded-lg p-4 ">
              <h2 className="text-xl font-bold text-primary">
                {course.courseName}
              </h2>

              <div className="my-2 flex gap-10">
                {course.batches.map((batch, batchIndex) => (
                  <UpcomingBatchCard data={batch} key={batchIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
