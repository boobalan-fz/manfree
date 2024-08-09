import connectMongoDB from "@/libs/mongodb";
import Course from "@/models/course";

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
  const getCourse = await Course.findOne({ _id: id }).populate("batches");

  return getCourse;
};

export const deleteCourseById = async (id) => {
  await connectMongoDB();
  return await Course.findByIdAndDelete(id);
};
