import React from "react";
import Profile from "../assets/svg/Ellipse 12.svg";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className="bg-[#6D67EB]">
        <div className="grid grid-cols-2 w-[95%] mx-auto py-5">
          <div className="flex justify-between">
            <p className="block lg:hidden font-inter font-[700] text-[25px] xl:text-[35px] text-white text-center">
              SigProS
            </p>
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="Rechercher"
                className="font-[500] font-inter text-[14px] text-[#BFBFBF] py-2 px-8 rounded-md"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#BFBFBF] absolute top-3 left-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>

          <div className="self-center gap-2 lg:gap-5 flex justify-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <div className="flex gap-2">
              <img src={Profile} alt="" />
              <p className="hidden lg:block font-inter font-[400] text-[14px] text-white">
                {/* Someone */}
                Quelqu’un
              </p>
              <svg
                onClick={() => setOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white block lg:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#6D67EB] py-3 shadow-xl">
                      <div class="container grid grid-cols-1 p-3">
                        <p className="font-inter font-[700] text-[25px] text-white text-center">
                          SigProS
                        </p>

                        <p
                          onClick={() => handleNavigate("/Dashboard")}
                          className="mt-10 flex cursor-pointer gap-2 font-[500] text-[15px]  text-white"
                        >
                          CONTRATISTAS/SUPLIDORES
                        </p>

                        <p
                          onClick={() => handleNavigate("/PAGOS")}
                          className="mt-5 xl:mt-5 flex cursor-pointer gap-2 font-[500] text-[15px] xl:text-[13px] text-white "
                        >
                          PAGOS
                        </p>

                        <p
                          onClick={() => handleNavigate("/INFORMES")}
                          className="mt-5 xl:mt-5 flex cursor-pointer gap-2 font-[500] text-[15px] xl:text-[13px] text-white"
                        >
                          INFORMES
                        </p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
