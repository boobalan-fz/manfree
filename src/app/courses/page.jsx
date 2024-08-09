import CourseCard from "@/components/homepage/CourseCard";
import { courses } from "@/constant/dummy";

const page = () => {
  return (
    <div className="px-16 py-12">
      <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-[1420px] mx-auto">
        {courses?.map((item, index) => (
          <CourseCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
