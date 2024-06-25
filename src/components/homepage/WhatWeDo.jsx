import WhatWeDoFiller from "@/components/homepage/WhatWeDoFiller";
import WhatWeOne from "@/assets/WhatWeDoOne.png";

const WhatWeDo = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold text-[#FE9601]">
        What We Do
      </h1>
      <div>
        <WhatWeDoFiller img={WhatWeOne} title={"Training"}>
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
