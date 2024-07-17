import CourseCard from "@/components/homepage/CourseCard";
import { data } from "@/constant/dummy";

const page = () => {
  return (
    <div className="px-16 py-12">
      <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {data?.map((item, index) => (
          <CourseCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
