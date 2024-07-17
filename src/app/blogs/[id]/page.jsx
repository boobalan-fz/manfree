"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "@/assets/image.png";
import BlogTitle from "@/components/BlogTitle";
import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Page = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState({});
  const [allblogs, setAllBlogs] = useState([]);
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

      async function fetchAllBlogs() {
        const response = await fetch("http://localhost:3500/blogs");
        const data = await response.json();
        if (data) {
          setAllBlogs(data);
        }
      }
      fetchAllBlogs();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log(allblogs);
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  return (
    <div className="w-full h-full">
      <BlogTitle title={data?.blogtitle} />
      <div className="mx-14 my-10 grid gap-6 grid-cols-5">
        <div className="col-span-3 w-full flex flex-col">
          <div className="bg-[#F1F1F1] flex items-center rounded h-[350px] justify-center">
            <Image alt="kas" src={img} />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.content }}
            className="p-6 mt-8 rounded-md bg-white "
          ></div>
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 placeholder:font-semibold text-[#183D6D] placeholder:text-lg placeholder:text-[#797A84] bg-white border  drop-shadow-md shadow-md rounded"
          />
          <div className=" px-4 py-2 bg-white border  drop-shadow-md shadow-md rounded">
            <h3 className="font-semibold text-lg text-[#183D6D] pb-2 border-b-[1.4px]">
              Recent Blogs
            </h3>
            <div className="flex flex-col gap-2 pt-4">
              {allblogs
                .sort(
                  (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
                )
                .slice(0, 3)
                .map((blog, index) => (
                  <Link
                    href={`/blogs/${blog.id}`}
                    key={index}
                    className="grid grid-cols-5  gap-3 items-end hover:border rounded-md hover:border-[#183D6D] "
                  >
                    <div className="bg-[#F1F1F1] col-span-1   flex p-6 items-center rounded  ">
                      <Image src={img} alt="kas" />
                    </div>
                    <div className="flex flex-col col-span-4 pb-1 gap-2">
                      <h3 className="text-sm   text-[#183D6D] ">
                        {blog.blogtitle}
                      </h3>
                      <div className="flex gap-2">
                        <span className="text-xs flex gap-1 items-center text-[#797A84] ">
                          <CalendarIcon className="w-5 h-5 text-[#183D6D]" />{" "}
                          {blog.publishDate}
                        </span>
                        <span className="text-xs flex gap-1 items-center text-[#797A84]">
                          <UserIcon className="w-5 h-5 text-[#183D6D]" />{" "}
                          {blog.author}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className=" px-4 py-2 bg-white border  drop-shadow-md shadow-md rounded">
            <h3 className="font-semibold text-lg text-[#183D6D] pb-2 border-b-[1.4px]">
              Tags
            </h3>
            <div className="flex gap-2 pt-4">
              {data?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#183D6D] text-white px-2  py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
