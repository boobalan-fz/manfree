import { axios } from "@/libs/axios";

export const getAllCourses = async () => {
  const data = await axios.get("/course");
  return data.data;
};

export const getCourse = async (id) => {
  const data = await axios.get(`/course/${id}`);
  return data.data;
};

export const getCreateCourses = async () => {
  const data = await axios.get("/course");
  return data.data;
};
