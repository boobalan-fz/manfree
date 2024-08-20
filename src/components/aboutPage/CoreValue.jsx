import { poppins, rubik } from "@/app/font";
import core from "@/assets/aboutUs/coreValue.png";
import CoreValueCard from "./CoreValueCard";
import { coreValue } from "@/constant/dummy";

const CoreValue = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${core.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundClip: "cover",
      }}
      className="p-20"
    >
      <div className="text-center">
        <h1
          className={`font-semibold text-xl text-[#FF9A53] ${poppins.className}`}
        >
          Core Values
        </h1>
        <p className={`text-3xl font-semibold ${rubik.className} mt-5`}>
          Strengthen Your Success with Core Values
        </p>
      </div>
      <div className="mt-10 grid grid-cols-3 max-w-screen-2xl mx-auto gap-x-14 gap-y-10 justify-items-center">
        {coreValue.map((item, index) => (
          <CoreValueCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
