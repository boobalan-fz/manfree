import { rubik } from "@/app/font";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactInfo from "@/components/contactUs/ContactInfo";
import CourseTitle from "@/components/course/CourseTitle";

const page = () => {
  return (
    <div>
      <CourseTitle title={"Contact Us"} />
      <div className=" grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 gap-10 md:gap-10 lg:gap-0 sm:px-32 px-5 md:px-5 lg:px-32 sm:py-20 py-10 md:py-10 lg:py-20">
        <ContactInfo />
        <ContactForm contact />
      </div>
      <div className="sm:px-32 px-5 md:px-5 lg:px-32 pb-20">
        <h1 className={`font-bold text-3xl text-primary ${rubik.className}`}>
          Our location
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.032249837847!2d77.03287107570537!3d11.0362072543469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857be54889afb%3A0x49699484052cf518!2sManfree%20Technologies!5e0!3m2!1sen!2sin!4v1723902837199!5m2!1sen!2sin"
          className="w-full h-80 mt-5"
        />
      </div>
    </div>
  );
};

export default page;
