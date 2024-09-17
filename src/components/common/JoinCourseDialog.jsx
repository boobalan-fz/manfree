"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import ContactForm from "../contactUs/ContactForm";

export default function JoinCourseDialog({ isOpen, close }) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="rounded-xl   duration-300 ease-out "
            >
              <ContactForm close={close} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
