"use client";
import { poppins, rubik } from "@/app/font";
import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "./InputComponent";

const ContactForm = ({ contact = false, close }) => {
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile_number: "987654321",
      description: "",
    },
  });
  const { handleSubmit, reset } = form;

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response.json());
      if (response.ok && !response?.error?.status) {
        reset();
        close();
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Internal Server Error");
    }
  };

  return (
    <div className="bg-[#EFF5FF] sm:p-16 p-8 md:p-8 lg:p-16 rounded-2xl ">
      {contact ? (
        <div className="space-y-5">
          <h1
            className={`${rubik.className} font-bold sm:text-4xl text-3xl md:text-3xl lg:text-4xl text-primary`}
          >
            Get in Touch
          </h1>
          <h1
            className={`${poppins.className} font-medium sm:text-xl text-lg md:text-lg lg:text-xl text-primary`}
          >
            You can reach us anytime
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="text-xl text-primary font-bold">Enquiry here</h1>
        </div>
      )}
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-9">
          <div className="grid grid-cols-2 gap-5 ">
            <InputComponent
              name="first_name"
              placeholder="First Name"
              rules={{ required: "First Name is required" }}
            />
            <InputComponent
              name="last_name"
              placeholder="Last Name"
              rules={{ required: "Last Name is required" }}
            />
          </div>
          <InputComponent
            name="email"
            placeholder="Your Email"
            rules={{ required: "Email is required" }}
          />
          <InputComponent
            name="phone_number"
            placeholder="Phone Number"
            rules={{ required: "Phone number is required" }}
          />
          <textarea
            placeholder="Tell us about you"
            className={`w-full px-5 py-4 mt-1 border focus:outline-none border-slate-300 rounded-xl`}
          />
          <div className="flex mt-5 gap-5">
            <button
              type="submit"
              className="w-full px-4 py-3 bg-primary text-[#FF9A53] rounded-lg font-semibold text-xl"
            >
              Submit
            </button>
            <button
              onClick={close}
              className="w-full px-4 py-3  border border-primary text-primary rounded-lg font-semibold text-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
