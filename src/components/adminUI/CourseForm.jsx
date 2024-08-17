"use client";
import {
  useCreateCourse,
  useGetCourse,
  useUpdateCourse,
} from "@/features/course/course.hooks";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "./InputComponent";
import { useRouter } from "next/navigation";

const CourseForm = ({ courseId }) => {
  const route = useRouter();
  const { mutate, isSuccess } = useCreateCourse();
  const { mutate: editCourse, isSuccess: editSuccess } = useUpdateCourse();
  const { data, isLoading } = useGetCourse(courseId);

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const { handleSubmit, reset, setValue } = form;

  useEffect(() => {
    if (data && !isLoading) {
      setValue("name", data?.course.name || "");
      setValue("description", data?.course.description || "");
    }
  }, [data, isLoading, setValue]);

  useEffect(() => {
    if (isSuccess || editSuccess) {
      route.push(`/admin/courses`);
      reset();
    }
  }, [isSuccess, editSuccess]);

  const onSubmit = (data) => {
    courseId ? editCourse({ id: courseId, value: data }) : mutate(data);
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            name="name"
            label="Name"
            placeholder="Name"
            rules={{ required: "Name is required" }}
          />
          <InputComponent
            name="description"
            label="Description"
            placeholder="Description"
            rules={{ required: "Description is required" }}
          />
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white "
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CourseForm;
