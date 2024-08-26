import connectMongoDB from "@/libs/mongodb";
import Batch from "@/models/batch";
import Course from "@/models/course";
import mongoose from "mongoose";

export const createCourse = async (data) => {
  await connectMongoDB();
  const createdCourse = await Course.create(data);
  return createdCourse;
};

export const getAllCourse = async () => {
  await connectMongoDB();
  const courses = await Course.find();
  return courses;
};

export const updateCourseById = async (id, data) => {
  await connectMongoDB();
  return await Course.findByIdAndUpdate(id, data);
};

export const getCourseById = async (id) => {
  await connectMongoDB();

  const today = new Date();

  const batches = await Batch.find({ course: new mongoose.Types.ObjectId(id) });
  const course = await Course.findOne({ _id: id });
  const finalData = { course, batches };
  finalData.batches = finalData?.batches.filter(
    (batch) => new Date(batch.date) > today
  );

  return finalData;
};

export const deleteCourseById = async (id) => {
  await connectMongoDB();
  return await Course.findByIdAndDelete(id);
};
