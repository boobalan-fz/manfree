"use client";
import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "./InputComponent";
import Dropdown from "./Dropdown";
import { useGetAllCourses } from "@/features/course/course.hooks";
import { useCreateBatch, useUpdateBatch } from "@/features/batch/batch.hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { formattedDate } from "@/utils/dateFormat";

const BatchForm = ({ updateValues }) => {
  const route = useRouter();
  const { data: courseData } = useGetAllCourses();
  const { mutate, isSuccess } = useCreateBatch();
  const { mutate: editBatch, isSuccess: editSuccess } = useUpdateBatch();

  const courses = courseData?.map(({ _id, name }) => {
    return { id: _id, name };
  });

  const batches = [
    { id: "weekdays", name: "weekdays" },
    { id: "weekend", name: "weekend" },
  ];

  const mode = [
    { id: "online", name: "online" },
    { id: "offline", name: "offline" },
  ];

  const form = useForm({
    defaultValues: {
      course: "",
      date: "",
      batch: "",
      start_time: "",
      location: "",
      mode: "",
      end_time: "",
    },
  });
  const { register, setValue, handleSubmit } = form;

  useEffect(() => {
    if (isSuccess || editSuccess) {
      route.push(`/admin/batches`);
    }
  }, [isSuccess, editSuccess]);

  useEffect(() => {
    if (updateValues) {
      setValue("course", updateValues?.course || "");
      setValue("date", formattedDate(updateValues?.date) || "");
      setValue("batch", updateValues?.batch || "");
      setValue("start_time", updateValues?.start_time || "");
      setValue("end_time", updateValues?.end_time || "");
      setValue("mode", updateValues?.mode || "");
      setValue("location", updateValues?.location || "");
    }
  }, [updateValues, setValue]);

  const onSumbit = (data) => {
    updateValues
      ? editBatch({ id: updateValues?._id, values: data })
      : mutate(data);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">Batch Form</h1>
      <FormProvider {...form}>
        <form
          className="grid grid-cols-2 gap-5"
          onSubmit={handleSubmit(onSumbit)}
        >
          <Dropdown
            data={courses}
            label="Course"
            name="course"
            defaultValue={updateValues?.course}
            register={register}
            setValue={setValue}
          />
          <InputComponent
            name="date"
            type="date"
            label="Date"
            placeholder="Date"
            rules={{ required: "Date is required" }}
          />
          <div className="flex gap-5 items-center">
            <div>
              <label className="text-base font-medium pb-1">Timing</label>
              <InputComponent
                name="start_time"
                type="time"
                rules={{ required: "Start time is required" }}
              />
            </div>
            <h1>to</h1>
            <div>
              <label className="text-base font-medium pb-1 invisible">
                Timing
              </label>
              <InputComponent
                name="end_time"
                type="time"
                rules={{ required: "End time is required" }}
              />
            </div>
          </div>
          <Dropdown
            data={batches}
            label="Batch"
            name="batch"
            defaultValue={updateValues?.batch}
            register={register}
            setValue={setValue}
          />
          <InputComponent
            name="location"
            label="Location"
            placeholder="Location"
            rules={{ required: "Location is required" }}
          />
          <Dropdown
            data={mode}
            label="Mode"
            name="mode"
            defaultValue={updateValues?.mode}
            register={register}
            setValue={setValue}
          />
          <div className="mt-4 col-start-1">
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

export default BatchForm;
