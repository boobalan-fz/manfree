"use client";
import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "./InputComponet";
import EditorLexical from "./EditorLexical";
import { useEffect, useState } from "react";
import TagInput from "./TagInput";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      blogtitle: "",
      author: "",
      tags: [],
      publishDate: new Date().toISOString().split("T")[0],
      content: "",
      img: "",
      allowComments: true,
    },
  });
  const { register, handleSubmit, setValue, reset } = form;

  const [content, setContent] = useState("");
  useEffect(() => {
    setValue("content", content);
  }, [content]);
  const OnSubmit = async (data) => {
    try {
      const formData = { ...data };
      const response = await axios.post(
        "http://localhost:3500/blogs",
        formData,
        {
          headers: {
            "Content-Type": "application/vnd.api+json",
          },
        }
      );
      if (response.status === 201) {
        router.push("/blogs");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className=" w-full h-full bg-gray-200"
        onSubmit={handleSubmit(OnSubmit)}
      >
        <div className=" px-10 py-10 w-full">
          <InputComponent
            label={"Blog Title"}
            name={"blogtitle"}
            placeholder={"Enter Blog title"}
          />
          <div className="h-full pt-8 ">
            <h2 className="text-base font-semibold pb-4 ">Tags</h2>
            <TagInput name="tags" />
          </div>

          <div className="grid grid-cols-3 py-6 items-center justify-center gap-6">
            <InputComponent
              label={"Author"}
              name={"author"}
              placeholder={"Enter Author name"}
            />
            <InputComponent
              label={"Publish Date"}
              name={"publishDate"}
              type="date"
            />
            <div className="flex gap-2 items-center justify-start">
              <input
                id="allowComments"
                className="w-4 h-4"
                type="checkbox"
                {...register}
              />
              <label htmlFor="allowComments" className="">
                Allow Comments
              </label>
            </div>
          </div>
          <div className="w-full">
            <label className="text-base font-medium pb-1 w-full">Content</label>
            <EditorLexical SetContent={setContent} content={content} />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold text-lg px-3 py-1.5 rounded shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateBlog;
