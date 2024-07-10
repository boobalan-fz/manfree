import Link from "next/link";
import facebook from "@/assets/fb.svg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";
import Image from "next/image";

const Footer = () => {
  const courses = [
    "Certified PLC Programmer",
    "Certified Automation Engineer",
    "Certified Embedded Engineer Associate",
    "Certified Embedded Engineer Professional",
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
      link: "",
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
    <footer className="w-full px-8 py-10 sm:px-16 sm:py-14 bg-[#001424]">
      <div className="flex flex-col sm:flex-row w-full sm:justify-between gap-7  sm:items-start">
        <div>
          <h1 className="font-semibold text-white pb-7 text-3xl">
            Our Courses
          </h1>
          <span className="flex flex-col items-start gap-7 font  ">
            {courses.map((item, ind) => (
              <Link
                href={`/courses/${item}`}
                className=" text-[#CECECE]"
                key={ind}
              >
                {item}
              </Link>
            ))}
          </span>
        </div>
        <div>
          <h1 className="font-semibold text-white pb-7 text-3xl">Website</h1>
          <span className="flex flex-col items-start gap-7 font  ">
            {website.map((item, ind) => (
              <Link href={item.route} className=" text-[#CECECE]" key={ind}>
                {item.name}
              </Link>
            ))}
          </span>
        </div>
        <div>
          <h1 className="font-semibold text-white pb-7 text-3xl">Contact us</h1>
          <div className="flex flex-col gap-6  text-[#CECECE] ">
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
            <span className="flex gap-4 sm:gap-6 items-center justify-start">
              {socials.map((item, ind) => (
                <a
                  target="_blank"
                  href={`/${item.link}`}
                  key={ind}
                  className="max-h-7 max-w-7"
                >
                  <Image src={item.img} alt="social" />
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
