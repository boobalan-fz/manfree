"use client";
import { poppins, rubik } from "@/app/font";
import CourseFilterButtons from "@/components/course/CourseFilterButtons";
import CourseTitle from "@/components/course/CourseTitle";
import CourseCard from "@/components/homepage/CourseCard";
import { courses } from "@/constant/dummy";
import { useState } from "react";

const Page = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredCourses =
    selectedTag === "All"
      ? courses
      : courses.filter(
          (course) => course.tag.toLowerCase() === selectedTag.toLowerCase()
        );

  return (
    <div>
      <CourseTitle title={"All Courses"} />
      <div className="sm:px-20 px-5 md:px-5">
        <div className="text-left  py-10">
          <h1
            className={`font-semibold sm:text-xl text-lg md:text-lg lg:text-xl text-[#FF9A53] ${rubik.className}`}
          >
            Courses we’re offering
          </h1>
          <p
            className={`sm:text-4xl text-3xl md:text-3xl lg:text-4xl font-semibold text-primary ${rubik.className} mt-5`}
          >
            Empowering Your Journey to Mastery
          </p>
        </div>
        <div>
          <CourseFilterButtons
            selectedTag={selectedTag}
            onSelectTag={setSelectedTag}
          />
        </div>
        <div className=" pb-20">
          <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:gap-10 gap-5 md:gap-5 lg:gap-10">
            {filteredCourses?.map((item, index) => (
              <CourseCard data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
