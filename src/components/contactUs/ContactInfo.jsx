"use client";
import Image from "next/image";
import phone from "@/assets/contactUs/call.svg";
import email from "@/assets/contactUs/mail.svg";
import address from "@/assets/contactUs/location.svg";
import facebook from "@/assets/contactUs/facebook.svg";
import instagram from "@/assets/contactUs/instagram.svg";
import linkedin from "@/assets/contactUs/linkedin.svg";
import twitter from "@/assets/contactUs/twitter.svg";
import { poppins, rubik } from "@/app/font";
import Link from "next/link";

const ContactInfo = () => {
  const socialMedia = [
    {
      img: instagram,
      link: "https://www.instagram.com/manfreetech?igsh=MXdlMWh4MGlxMzFqdw==",
    },
    { img: facebook, link: "https://www.facebook.com/manfreetech" },
    { img: twitter, link: "https://x.com/manfreetech" },
    {
      img: linkedin,
      link: "https://www.linkedin.com/company/manfree-technologies---india",
    },
  ];
  const info = [
    {
      icon: phone,
      title: "Call us",
      value: "+91-9944766990",
    },
    {
      icon: email,
      title: "Email Us",
      value: "info@manfreetechnologies.com",
    },
    {
      icon: address,
      title: "Address",
      value: "12/2 R.V.M Complex, Avinashi Road",
      value2: "SITRA, Coimbatore  641 014",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-10">
        {info?.map((item, index) => (
          <div className="flex gap-4 justify-start items-start" key={index}>
            <Image src={item.icon} width={35} height={35} alt="social" />
            <div className="flex flex-col gap-4">
              <h1
                className={`${rubik.className} font-semibold sm:text-3xl text-2xl md:text-2xl lg:text-3xl`}
              >
                {item.title}
              </h1>
              <h1
                className={`${poppins.className} font-medium sm:text-xl text-lg md:text-lg lg:text-xl`}
              >
                {item.value}
              </h1>
              {item.value2 && (
                <h1
                  className={`${poppins.className} font-medium sm:text-xl text-lg md:text-lg lg:text-xl`}
                >
                  {item.value2}
                </h1>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1
          className={`${rubik.className} font-semibold sm:text-3xl text-2xl md:text-2xl lg:text-3xl`}
        >
          Connect with us on
        </h1>
        <div className="flex gap-7 mt-3">
          {socialMedia?.map((item, index) => (
            <Link target="_blank" href={item?.link} key={index}>
              <Image src={item?.img} alt="social" width={35} height={35} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
