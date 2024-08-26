import { poppins, rubik } from "@/app/font";

const CoreValueCard = ({ data }) => {
  return (
    <div className="pt-20 px-7 pb-10  bg-white text-center space-y-10 rounded-md shadow-md">
      <h1
        className={`${rubik.className} font-semibold sm:text-4xl text-3xl md:text-3xl lg:text-4xl text-primary`}
      >
        {data.title}
      </h1>
      <p
        className={`${poppins.className} sm:text-xl text-lg md:text-lg lg:text-xl text-textColor font-medium`}
      >
        {data.content}
      </p>
    </div>
  );
};

export default CoreValueCard;
