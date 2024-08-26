import { poppins, rubik } from "@/app/font";
import core from "@/assets/aboutUs/coreValue.png";
import CoreValueCard from "./CoreValueCard";
import { coreValue } from "@/constant/dummy";

const CoreValue = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${core.src})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundClip: "cover",
      }}
      className="sm:p-20 p-5 md:p-5 lg:p-20"
    >
      <div className="text-center">
        <h1
          className={`font-semibold sm:text-xl text-lg md:text-lg lg:text-xl text-[#FF9A53] ${poppins.className}`}
        >
          Core Values
        </h1>
        <p
          className={`sm:text-3xl text-2xl md:text-2xl lg:text-3xl font-semibold ${rubik.className} mt-5`}
        >
          Strengthen Your Success with Core Values
        </p>
      </div>
      <div className="mt-10 grid sm:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto sm:gap-10 gap-5 md:gap-5 lg:gap-10 justify-items-center">
        {coreValue.map((item, index) => (
          <CoreValueCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
