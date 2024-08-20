import { poppins, rubik } from "@/app/font";

const CoreValueCard = ({ data }) => {
  return (
    <div className="pt-20 px-7 pb-10 min-w-[400px] bg-white text-center space-y-10 rounded-md shadow-md">
      <h1 className={`${rubik.className} font-semibold text-4xl text-primary`}>
        {data.title}
      </h1>
      <p className={`${poppins.className} text-xl text-textColor font-medium`}>
        {data.content}
      </p>
    </div>
  );
};

export default CoreValueCard;
