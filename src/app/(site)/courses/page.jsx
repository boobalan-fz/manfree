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
      <div className="text-left px-20 py-10">
        <h1
          className={`font-semibold text-xl text-[#FF9A53] ${rubik.className}`}
        >
          Courses we’re offering
        </h1>
        <p
          className={`text-4xl font-semibold text-primary ${rubik.className} mt-5`}
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
      <div className="px-20 pb-20">
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
          {filteredCourses?.map((item, index) => (
            <CourseCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
