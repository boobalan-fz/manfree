import connectMongoDB from "@/libs/mongodb";
import Batch from "@/models/batch";

export const createBatch = async (data) => {
  await connectMongoDB();
  const createdBatch = await Batch.create(data);
  return createdBatch;
};

export const getAllBatch = async () => {
  await connectMongoDB();
  const batches = await Batch.find().populate("course");
  return batches;
};

export const updateBatchById = async (id, data) => {
  await connectMongoDB();
  const updatedBatch = await Batch.findByIdAndUpdate(id, data);
  return updatedBatch;
};

export const getBatchById = async (id) => {
  await connectMongoDB();
  const getSingleBatch = await Batch.findOne({ _id: id });
  return getSingleBatch;
};

export const deleteBatchById = async (id) => {
  await connectMongoDB();
  const deletedBatch = await Batch.findByIdAndDelete(id);
  return deletedBatch;
};
