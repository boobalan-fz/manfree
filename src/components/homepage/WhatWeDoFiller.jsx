import Image from "next/image";

const WhatWeDoFiller = ({ img, title, children }) => {
  return (
    <div className="grid grid-cols-2 gap-10 px-20">
      <div>
        <Image src={img} alt="one" />
      </div>
      <div>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div className="flex flex-col items-start gap-4">{children}</div>
      </div>
    </div>
  );
};

export default WhatWeDoFiller;
