import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import manfree from "@/assets/manfreeLogo.svg";

const ResponsiveNav = ({ mobileMenuOpen, setMobileMenuOpen, navBar }) => {
  return (
    <>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full flex-col justify-between overflow-y-auto bg-[#0E0F3B] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Manfree</span>
                <div className="relative h-[77.83px] w-[106.37px]">
                  <Image
                    src={manfree}
                    alt="Manfree"
                    fill
                    objectPosition="center"
                  />
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navBar.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-3 rounded-lg p-2 font-semibold leading-7 hover:bg-neutral-800 text-white"
                    >
                      <div></div>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default ResponsiveNav;
