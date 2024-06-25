import successBg from "@/assets/successStoryBg.png";
import WhatWeDo from "@/components/homepage/WhatWeDo";
import AboutUs from "@/components/homepage/AboutUs";
import HomeBanner from "@/components/homepage/HomeBanner";
import StatsCard from "@/components/homepage/StatsCard";

const data = [
  { count: 10, title: "Years of Experience" },
  { count: 1900, title: "Students Trained" },
  { count: 50, title: "Industrial Project" },
  { count: 25, title: "Recruitment Partners" },
];

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <div>
        <AboutUs />
      </div>
      <div
        style={{
          backgroundImage: `url(${successBg.src})`,
        }}
        className="bg-cover bg-center py-10 bg-[#001424]"
      >
        <h1 className="text-5xl text-center font-semibold text-[#FE9601]">
          Successful Stories
        </h1>
        <div className="flex md:flex-wrap sm:flex-wrap  gap-5 justify-center mt-8 px-10">
          {data?.map((item, index) => (
            <StatsCard count={item.count} title={item.title} key={index} />
          ))}
        </div>
      </div>
      <div>
        <WhatWeDo />
      </div>
    </div>
  );
}
