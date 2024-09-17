import Link from "next/link";
import computer from "@/assets/computer.jpg";
import embeddedpic from "@/assets/embeddedpic.jpg";
import motor from "@/assets/motor.jpg";
import facebook from "@/assets/fb.svg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";
import Image from "next/image";
import footerBg from "@/assets/Footer.png";

const Footer = () => {
  const courses = [
    {
      tag: "PLC",
      title: "PLC Automation and Programming",
      description:
        "Streamline operations with expert PLC automation and programming.",
      img: computer,
      href: "/courses/plc",
    },
    {
      tag: "Embedded",
      title: "Arduino Programmer",
      description:
        "Innovate and integrate with our advanced embedded systems training.",
      img: embeddedpic,
      href: "/courses/arduinoProgrammer",
    },
    {
      tag: "Embedded",
      title: "Embedded Engineer Professional",
      description:
        "Innovate and integrate with our advanced embedded systems training.",
      img: embeddedpic,
      href: "/courses/embeddedProfessional",
    },
    {
      tag: "Embedded",
      title: "Embedded Engineer Associate",
      description:
        "Innovate and integrate with our advanced embedded systems training.",
      img: embeddedpic,
      href: "/courses/embeddedAssociate",
    },
    {
      tag: "Embedded",
      title: "Embedded Programmer",
      description:
        "Innovate and integrate with our advanced embedded systems training.",
      img: embeddedpic,
      href: "/courses/embeddedProgrammer",
    },
    {
      tag: "Automation",
      title: "Certified Industrial Automation Associate",
      description:
        "Drive efficiency and innovation through tailored automation solutions.",
      img: motor,
      href: "/courses/industrialAssociate",
    },
  ];

  const website = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About us",
      route: "/about",
    },
    {
      name: "Courses",
      route: "/courses",
    },
    {
      name: "Contact us",
      route: "/contact",
    },
  ];

  const socials = [
    {
      img: instagram,
      link: "https://www.instagram.com/manfreetech?igsh=MXdlMWh4MGlxMzFqdw==",
    },
    {
      img: facebook,
      link: "https://www.facebook.com/manfreetech",
    },
    {
      img: twitter,
      link: "https://x.com/manfreetech",
    },
    {
      img: linkedin,
      link: "https://www.linkedin.com/company/manfree-technologies---india",
    },
  ];

  return (
    <footer
      style={{
        backgroundImage: `url(${footerBg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full px-8 py-10 sm:px-16 sm:py-14"
    >
      <div className="flex flex-col sm:flex-row w-full sm:justify-between gap-7 sm:gap-0 md:gap-7 lg:gap-0  sm:items-start">
        <div>
          <h1 className="font-semibold text-[#FF9A53] sm:pb-7 pb-3 md:pb-3 lg:pb-7 sm:text-3xl text-2xl md:text-2xl lg:text-3xl">
            Our Courses
          </h1>
          <span className="flex flex-col items-start sm:gap-7 gap-4 md:gap-4 lg:gap-7   ">
            {courses.map((item, index) => (
              <Link
                href={`${item.href}`}
                className=" text-[#797A84] sm:text-xl text-lg md:text-lg lg:text-xl"
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </span>
        </div>
        <div>
          <h1 className="font-semibold text-[#FF9A53] sm:pb-7 pb-3 md:pb-3 lg:pb-7 sm:text-3xl text-2xl md:text-2xl lg:text-3xl">
            Website
          </h1>
          <span className="flex flex-col items-start sm:gap-7 gap-4 md:gap-4 lg:gap-7   ">
            {website.map((item, ind) => (
              <Link
                href={item?.route}
                className=" text-[#797A84] sm:text-xl text-lg md:text-lg lg:text-xl"
                key={ind}
              >
                {item.name}
              </Link>
            ))}
          </span>
        </div>
        <div>
          <h1 className="font-semibold text-[#FF9A53] sm:pb-7 pb-3 md:pb-3 lg:pb-7 sm:text-3xl text-2xl md:text-2xl lg:text-3xl">
            Contact us
          </h1>
          <div className="flex flex-col sm:gap-7 gap-4 md:gap-4 lg:gap-7  text-[#797A84] sm:text-xl text-lg md:text-lg lg:text-xl">
            <span className=" ">
              12/2 R.V.M Complex, Avinashi Road,
              <br />
              SITRA, Coimbatore - 641 014
            </span>
            <a href="mailto: info@manfreetechnologies.com" className="">
              info@manfreetechnologies.com
            </a>
            <a href="tel: +91-9944766990" className="">
              +91-9944766990
            </a>
            <span className="flex flex-col gap-4 sm:gap-6 ">
              <h1 className="font-normal text-[#FF9A53]  text-xl">
                Connect with us
              </h1>
              <div className="flex gap-5 items-center">
                {socials.map((item, ind) => (
                  <Link
                    target="_blank"
                    href={`${item.link}`}
                    key={ind}
                    className="max-h-9 max-w-9 text-[#FF9A53]"
                  >
                    <Image src={item.img} alt="social " />
                  </Link>
                ))}
              </div>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
