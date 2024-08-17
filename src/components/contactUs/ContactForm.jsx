"use client";
import { poppins, rubik } from "@/app/font";
import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile_number: "987654321",
      description: "",
    },
  });
  const { control, handleSubmit, watch, setError, reset } = form;

  return (
    <div className="bg-[#EFF5FF] p-16 rounded-2xl ">
      <div className="space-y-5">
        <h1 className={`${rubik.className} font-bold text-4xl text-primary`}>
          Get in Touch
        </h1>
        <h1 className={`${poppins.className} font-medium text-xl text-primary`}>
          You can reach us anytime
        </h1>
      </div>
      <FormProvider {...form}>
        <form className="flex flex-col mt-9">
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
            <button className="w-full px-4 py-3 bg-primary text-[#FF9A53] rounded-lg font-semibold text-xl">
              Submit
            </button>
            <button className="w-full px-4 py-3  border border-primary text-primary rounded-lg font-semibold text-xl">
              Cancel
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
