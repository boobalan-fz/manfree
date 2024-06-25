import WhatWeDoFiller from "@/components/homepage/WhatWeDoFiller";
import WhatWeOne from "@/assets/WhatWeDoOne.png";
import WhatWeBg from "@/assets/WhatWeDoBg.png";
import WhatWeTwo from "@/assets/WhatWeDoTwo.png";
import WhatWeThree from "@/assets/WhatWeDoThree.png";
import WhatWeFour from "@/assets/WhatWeDoFour.png";

const WhatWeDo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${WhatWeBg.src})`,
      }}
      className="py-10 bg-cover bg-center"
    >
      <h1 className="text-5xl text-center font-semibold text-[#FE9601]">
        What We Do
      </h1>
      <div className="mt-[80px] flex flex-col gap-[60px]">
        <WhatWeDoFiller img={WhatWeOne} title="TRAINING">
          <p className="font-normal text-lg mt-5">
            In Manfree, we create high quality, affordable, interactive, and
            accessible learning experience.In Manfree, we create high quality.
          </p>
          <ul className="ml-10 list-disc space-y-2 text-lg">
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
          </ul>
          <button className="px-3 py-2 bg-[#4B86F3] rounded-md text-white">
            View more
          </button>
        </WhatWeDoFiller>
        <WhatWeDoFiller img={WhatWeTwo} title="PLACEMENT" right>
          <p className="font-normal text-lg mt-5">
            In Manfree, we create high quality, affordable, interactive, and
            accessible learning experience.In Manfree, we create high quality.
          </p>
          <ul className="ml-10 list-disc space-y-2 text-lg">
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
          </ul>
          <button className="px-3 py-2 bg-[#4B86F3] rounded-md text-white">
            View more
          </button>
        </WhatWeDoFiller>
        <WhatWeDoFiller img={WhatWeThree} title="R & D SERVICE">
          <p className="font-normal text-lg mt-5">
            In Manfree, we create high quality, affordable, interactive, and
            accessible learning experience.In Manfree, we create high quality.
          </p>
          <ul className="ml-10 list-disc space-y-2 text-lg">
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
          </ul>
          <button className="px-3 py-2 bg-[#4B86F3] rounded-md text-white">
            View more
          </button>
        </WhatWeDoFiller>
        <WhatWeDoFiller img={WhatWeFour} title="PROJECT DEVELOPMENT" right>
          <p className="font-normal text-lg mt-5">
            In Manfree, we create high quality, affordable, interactive, and
            accessible learning experience.In Manfree, we create high quality.
          </p>
          <ul className="ml-10 list-disc space-y-2 text-lg">
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
            <li>
              In Manfree, we create high quality, affordable, interactive, and
              accessible learning experience.
            </li>
          </ul>
          <button className="px-3 py-2 bg-[#4B86F3] rounded-md text-white">
            View more
          </button>
        </WhatWeDoFiller>
      </div>
    </div>
  );
};

export default WhatWeDo;
