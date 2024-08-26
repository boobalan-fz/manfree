import { poppins, rubik } from "@/app/font";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example({ data }) {
  return (
    <div className="">
      <div className=" border-b ">
        <Disclosure
          as="div"
          className="sm:px-6 px-2 md:px-2 lg:px-6 py-5"
          defaultOpen={false}
        >
          <DisclosureButton className="group flex w-full items-center text-left justify-between">
            <span
              className={`sm:text-lg text-base md:text-base lg:text-lg font-semibold ${rubik.className} text-[#183D6D] w-[95%]`}
            >
              {data.question}
            </span>
            <ChevronDownIcon className="size-5  group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="my-4 text-sm">
            <div className=" flex gap-3 items-center">
              {/* <Image src={list} /> */}
              <h1
                className={`text-[#797A84] ${poppins.className} font-normal text-base`}
              >
                {data.answer}
              </h1>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
