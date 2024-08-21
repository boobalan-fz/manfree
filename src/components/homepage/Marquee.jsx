import Image from "next/image";
import bosch from "@/assets/bosch.svg";
import larsen from "@/assets/larsen.svg";
import onward from "@/assets/onward.svg";
import capgemini from "@/assets/Capgemini.svg";
import ust from "@/assets/ust.svg";

const Marquee = () => {
  return (
    <div className="overflow-x-hidden pt-16">
      <div className="flex items-center gap-32 animate-loop-scroll ">
        <Image src={bosch} alt="icons" height={100} width={200} />
        <Image src={larsen} alt="icons" height={100} width={200} />
        <Image src={onward} alt="icons" height={100} width={200} />
        <Image src={capgemini} alt="icons" height={100} width={200} />
        <Image src={ust} alt="icons" height={50} width={50} />
        <Image src={bosch} alt="icons" height={100} width={200} />
        <Image src={larsen} alt="icons" height={100} width={200} />
        <Image src={onward} alt="icons" height={100} width={200} />
        <Image src={capgemini} alt="icons" height={100} width={200} />
        <Image src={ust} alt="icons" height={50} width={50} />
        <Image src={bosch} alt="icons" height={100} width={200} />
        <Image src={larsen} alt="icons" height={100} width={200} />
        <Image src={onward} alt="icons" height={100} width={200} />
        <Image src={capgemini} alt="icons" height={100} width={200} />
        <Image src={ust} alt="icons" height={50} width={50} />
      </div>
    </div>
  );
};

export default Marquee;
