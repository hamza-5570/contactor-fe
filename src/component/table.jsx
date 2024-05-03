import React from "react";
import Plus from "../assets/svg/Frame 70774.svg";
import Profile from "../assets/jpg/181218171717-ymm-south-africa.jpg";

const list = [
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
  {
    plus: Plus,
    dp: Profile,
    name: "Castan",
    btn: "Président",
    mail: "exemple1@gmail.com",
  },
];

export default function Table() {
  return (
    <>
      <div className="hidden md:block">
        <div className="  bg-[#BFD5FF] grid grid-cols-6 md:grid-cols-12 px-5 py-3 rounded-t-lg mt-10">
          <div className="md:col-span-1">
            <p className="font-inter font-[500] text-[12px] text-[#5F6D7E]"></p>
          </div>
          <div className="md:col-span-2 text-center">
            <p className="font-inter font-[500] text-[12px] text-[#5F6D7E]">
              {/* Name */}
              Nom
            </p>
          </div>
          <div className="md:col-span-2  text-center">
            <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
              {/* Position */}
              Poste
            </p>
          </div>
          <div className="md:col-span-3 text-center">
            <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
              {/* Email */}
              Courriel
            </p>
          </div>
          <div className="md:col-span-2 text-center ">
            <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
              {/* Edit */}
              éditer
            </p>
          </div>
          <div className="md:col-span-2 text-center ">
            <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
              {/* Delete */}
              Supprimer
            </p>
          </div>
        </div>
      </div>

      {list.map((item) => (
        <div className="hidden md:grid  grid-cols-6 md:grid-cols-12 px-5 py-3 border-[1px] border-gray-300 bg-white">
          <div className="md:col-span-1">
            <img src={item.plus} alt="" className="block mx-auto" />
          </div>
          <div className="md:col-span-2 flex justify-center gap-2 ">
            <img
              src={item.dp}
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
            <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
              {item.name}
            </p>
          </div>
          <div className="md:col-span-2">
            <button className="font-inter font-[400] text-[13px] text-[#FF6F00] border-[1px] border-[#FF6F00] rounded-full bg-[#fbf0f1] py-1 px-5 block mx-auto">
              {item.btn}
            </button>
          </div>
          <div className="md:col-span-3 ">
            <p className="text-center font-inter font-[500] text-[14px] text-[#2E3646]">
              {item.mail}
            </p>
          </div>
          <div className="md:col-span-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#5E83F5] mx-auto"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </div>
          <div className="md:col-span-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#FC3832] mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ))}

      {list.map((item) => (
        <div className="mt-5 grid md:hidden  grid-cols-1 md:grid-cols-12 px-5 py-5 border-[1px] border-gray-300 bg-white rounded-lg">
          <div className="grid grid-cols-2">
            <div>
              <img src={item.dp} alt="" className="w-[80%] rounded-xl" />
            </div>
            <div className="self-center">
              <p className=" self-center font-inter font-[500] text-[20px] text-[#2E3646]">
                {item.name}
              </p>
              <p className="  font-inter font-[500] text-[16px] text-[#2E3646]">
                {item.mail}
              </p>
              <button className="mt-2 font-inter font-[400] text-[15px] text-[#FF6F00] border-[1px] border-[#FF6F00] rounded-full bg-[#fbf0f1] py-1 px-5 ">
                {item.btn}
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <img src={item.plus} alt="" className="block mx-auto" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#FC3832] mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#5E83F5] mx-auto"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-10">
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1 text-[#5F6D7E]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>

          <p className="font-inter font-[600] text-[14px] text-[#5F6D7E]">
            {/* Prev */}
            Préc
          </p>
        </div>

        <div className="flex gap-2">
          <p className="font-inter font-[600] text-[14px] text-[#5F6D7E]">1</p>
          <p className="font-inter font-[600] text-[14px] text-[#5F6D7E]">2</p>
          <p className="font-inter font-[600] text-[14px] text-[#5F6D7E]">
            ...
          </p>
          <p className="font-inter font-[600] text-[14px] text-[#5F6D7E]">5</p>
          <p className="font-inter font-[600] text-[14px] text-[#5F6D7E]">6</p>
        </div>

        <div className="flex gap-1">
          <p className="font-inter font-[600] text-[14px] text-[#5F6D7E]">
            {/* Next */}
            Prochain
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[#5F6D7E] mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
