"use client";
import BatchForm from "@/components/adminUI/BatchForm";
import { useGetbBatch } from "@/features/batch/batch.hooks";

const Page = ({ params }) => {
  const [id] = params?.id;
  const { data } = useGetbBatch(id);

  return (
    <div>
      <BatchForm updateValues={data} />
    </div>
  );
};

export default Page;
