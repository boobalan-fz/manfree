import PageHeadBanner from "@/components/aboutPage/PageHeadBanner";
import WhyUsAbout from "@/components/aboutPage/WhyUsAbout";
import AboutUs from "@/components/homepage/AboutUs";

const page = () => {
  return (
    <div>
      <PageHeadBanner title={"About us"} />
      <AboutUs />
      <WhyUsAbout />
    </div>
  );
};

export default page;
