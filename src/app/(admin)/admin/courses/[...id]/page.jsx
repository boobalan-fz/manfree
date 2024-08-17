import CourseForm from "@/components/adminUI/CourseForm";

const Page = ({ params }) => {
  const [id] = params?.id;

  return (
    <div>
      <CourseForm courseId={id} />
    </div>
  );
};

export default Page;
