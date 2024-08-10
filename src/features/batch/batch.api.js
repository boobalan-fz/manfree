import { axios } from "@/libs/axios";

export const getAllBatches = async () => {
  const data = await axios.get("/batch");
  return data.data;
};

export const getBatch = async (id) => {
  const data = await axios.get(`/batch/${id}`);
  return data.data;
};

export const createBatch = async (value) => {
  const data = await axios.post(`/batch`, value);
  return data.data;
};

export const deleteBatch = async (id) => {
  const data = await axios.delete(`/batch/${id}`);
  return data.data;
};