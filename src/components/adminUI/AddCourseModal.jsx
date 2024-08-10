"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import { FormProvider, useForm } from "react-hook-form";
import { useCreateCourse, useGetCourse } from "@/features/course/course.hooks";

export default function AddCourseModal({ isOpen, close, courseId }) {
  const { mutate, isSuccess } = useCreateCourse();
  const { data } = useGetCourse(courseId);

  const form = useForm({
    defaultValues: {
      name: courseId ? data?.course.name : "",
      description: courseId ? data?.course.description : "",
    },
  });
  const { handleSubmit, reset } = form;

  useEffect(() => {
    if (isSuccess) {
      reset();
      close();
    }
  }, [isSuccess]);

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black/80   p-6  duration-300 ease-out"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Add Course
              </DialogTitle>
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
