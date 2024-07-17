"use client";
import BlogCard from "@/components/BlogCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch("http://localhost:3500/blogs");
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

  return (
    <div className="mx-14 my-10">
      <div className=" flex justify-end">
        <button
          onClick={() => router.push("/blogs/create")}
          className="px-2  bg-blue-500 text-white rounded font-semibold text-lg py-2"
        >
          Create Blogs <PlusIcon className="h-5 w-5 inline" />
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 pt-6 ">
          {data
            ?.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
            .map((blog, index) => (
              <Fragment key={index}>
                <BlogCard data={blog} key={index} />
              </Fragment>
            ))}
        </div>
      )}
    </div>
  );
};

export default Page;
