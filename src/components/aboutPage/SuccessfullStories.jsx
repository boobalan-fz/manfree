import { poppins, rubik } from "@/app/font";
import StoryCard from "./StoryCard";
import { successStories } from "@/constant/dummy";

const SuccessfullStories = () => {
  return (
    <div className="sm:p-20 p-5 md:p-5 lg:p-20">
      <div className="text-center">
        <h1
          className={`font-semibold sm:text-xl text-lg md:text-lg lg:text-xl text-[#FF9A53] ${poppins.className}`}
        >
          Successful Stories
        </h1>
        <p
          className={`sm:text-3xl text-2xl md:text-2xl lg:text-3xl font-semibold ${rubik.className} mt-5`}
        >
          Inspiring Journeys, Proven Success
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex sm:flex-row flex-col md:flex-col lg:flex-row gap-10 pt-10">
        {successStories.map((item, index) => (
          <StoryCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SuccessfullStories;
