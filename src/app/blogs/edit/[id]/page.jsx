"use client";
import CreateBlog from "@/components/form/CreateBlog";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(`http://localhost:3500/blogs/${id}`, {
          headers: {
            "Content-Type": "application/vnd.api+json",
          },
        });
        const data = await response.json();
        if (data) {
          setData(data);
          setLoading(false);
        }
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }
  return <CreateBlog id={id} data={data} />;
};

export default Page;
