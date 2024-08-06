import load from "@/assets/loading.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center absolute z-50 inset-0 h-full w-full bg-[#001424] bg-opacity-80 backdrop-blur">
      <Image src={load} alt="gif" width={500} height={500} />
    </div>
  );
};

export default Loading;
