import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ModalContent from "./ModalContent";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/ModalState";

export default function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router = useRouter();
//   console.log("Modal ❤️‍🔥" + router.query.payments);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => {
          setIsOpen(false);
        }}
        className="relative z-50"
      >
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30  " />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0  flex items-center justify-center p-[1rem] m-auto w-[23rem] ">
            <Dialog.Panel className="w-full max-w-lg  rounded bg-white  ">
              {/* <Dialog.Title
                className={
                  "border-b-2 text-center text-[1.6rem] font-bold mb-8 pb-3"
                }
              >
                Create new post
              </Dialog.Title> */}
              <ModalContent />

              {/* ... */}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
