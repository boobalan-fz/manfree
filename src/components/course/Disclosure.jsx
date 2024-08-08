import { poppins, rubik } from "@/app/font";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import list from "@/assets/listIcon.svg";
import Image from "next/image";

export default function Example({ data }) {
  return (
    <div className="">
      <div className=" border rounded-[8px]">
        <Disclosure as="div" className="px-6 py-2" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span
              className={`text-[18px] font-semibold ${rubik.className} text-[#183D6D]`}
            >
              {data.title}
            </span>
            <ChevronDownIcon className="size-5  group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="my-4 text-sm">
            <ul className="flex flex-col gap-3">
              {data.content.map((item, index) => (
                <li className=" flex gap-3 items-center" key={index}>
                  <Image src={list} alt="dummy" />
                  <h1
                    className={`text-[#797A84] ${poppins.className} font-normal text-base`}
                  >
                    {item}
                  </h1>
                </li>
              ))}
            </ul>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
