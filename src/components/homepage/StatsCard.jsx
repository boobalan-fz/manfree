import cardBg from "@/assets/statCardBg.png";

const StatsCard = ({ count, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${cardBg.src})`,
      }}
      className="bg-cover bg-center p-10 bg-white flex justify-center items-center gap-5 flex-col rounded-md w-[340px] "
    >
      <h1 className="font-black text-5xl">{count}+</h1>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

export default StatsCard;
