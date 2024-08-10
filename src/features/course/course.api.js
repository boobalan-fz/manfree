import { axios } from "@/libs/axios";

export const getAllCourses = async () => {
  const data = await axios.get("/course");
  return data.data;
};

export const getCourse = async (id) => {
  const data = await axios.get(`/course/${id}`);
  return data.data;
};

export const createCourses = async (value) => {
  const data = await axios.post("/course", value);
  return data.data;
};

export const deleteCourse = async (id) => {
  const data = await axios.delete(`/course/${id}`);
  return data.data;
};

export const updateCourse = async ({ id, value }) => {
  const data = await axios.delete(`/course/${id}`, value);
  return data.data;
};
