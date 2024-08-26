import Image from "next/image";
import manfree from "@/assets/Manfree_Hero Image.png";
import { poppins, rubik } from "@/app/font";

const HomeBanner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col justify-center">
        <Image
          src={manfree}
          alt="new"
          className="bg-slate-800 object-cover object-left w-full sm:h-auto h-[400px] md:h-[400px] lg:h-auto"
          priority
        />

        <div className="absolute flex flex-col items-end sm:gap-10 gap-5 md:gap-2 lg:gap-10 right-0 p-5 sm:p-10 md:p-5 lg:p-20">
          <h1
            className={`${rubik.className} text-white text-2xl sm:text-6xl md:text-2xl lg:text-6xl text-right font-bold tracking-wide`}
          >
            Time to make the{" "}
            <span className="text-secondary">
              {" "}
              career <br />
              change
            </span>{" "}
            you’ve always wanted.
          </h1>

          <button
            className={`${poppins.className} px-5 sm:px-16 sm:py-3 py-2 bg-secondary rounded-full sm:text-xl text-lg md:text-lg lg:text-xl font-semibold`}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
