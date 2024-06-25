import Image from "next/image";
import manfree from "@/assets/Manfree_Hero Image.png";

const HomeBanner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col justify-center">
        <Image
          src={manfree}
          alt="new"
          className="bg-slate-800 object-cover w-full h-auto"
          priority
        />

        <div className="absolute flex flex-col items-end sm:gap-10 gap-5 md:gap-2 lg:gap-10 right-0 p-5 sm:p-10 md:p-5 lg:p-10">
          <h1 className="font-sans text-white text-sm sm:text-base md:text-sm lg:text-base font-normal tracking-widest">
            Welcome to Manfree Technologies
          </h1>
          <h1 className="font-sans text-white text-2xl sm:text-5xl md:text-2xl lg:text-5xl text-right font-bold tracking-wide">
            Time to make the career <br />
            change you’ve always wanted.
          </h1>
          <h1 className="font-sans text-white text-sm sm:text-base md:text-sm lg:text-base font-normal tracking-widest">
            Learn exciting new skills at your own pace and build a career that
            you desire.
          </h1>
          <button className="px-6 sm:px-10 py-3 bg-[#F8A332] rounded-md text-base font-semibold">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
