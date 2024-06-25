import Image from "next/image";

const WhatWeDoFiller = ({ img, title, children, right = false }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 px-14">
      {!right && (
        <div className="order-1 lg:order-none">
          <Image src={img} alt="one" className="h-full" />
        </div>
      )}
      <div className="order-2 lg:order-none">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        <div className="flex flex-col items-start gap-4">{children}</div>
      </div>
      {right && (
        <div className="order-1 lg:order-none">
          <Image src={img} alt="one" className="h-full" />
        </div>
      )}
    </div>
  );
};

export default WhatWeDoFiller;
