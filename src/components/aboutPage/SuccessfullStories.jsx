import { poppins, rubik } from "@/app/font";
import StoryCard from "./StoryCard";
import { successStories } from "@/constant/dummy";

const SuccessfullStories = () => {
  return (
    <div className="p-20">
      <div className="text-center">
        <h1
          className={`font-semibold text-xl text-[#FF9A53] ${poppins.className}`}
        >
          Successful Stories
        </h1>
        <p className={`text-3xl font-semibold ${rubik.className} mt-5`}>
          Inspiring Journeys, Proven Success
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex gap-10 pt-10">
        {successStories.map((item, index) => (
          <StoryCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SuccessfullStories;
