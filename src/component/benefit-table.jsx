import React from "react";
import Plus from "../assets/svg/Frame 70774.svg";

const list = [
  {
    plus: "1",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "2",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "3",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "4",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "5",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "6",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "7",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "8",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "9",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
  {
    plus: "10",
    name: "Santé",
    btn: "Exemple",
    mail: "exemple",
  },
];

export default function BenefitTable() {
  return (
    <>
      <div className="overflow-x-scroll">
        <div className="w-[1000px] mx-auto">
          <div className="  bg-[#BFD5FF] flex justify-between px-5 py-3 rounded-t-lg mt-5">
            <div className="">
              <p className="font-inter font-[500] text-[12px] text-[#5F6D7E] lowercase">
                NOMBRE CONTRATISTA
              </p>
            </div>
            <div className="text-center">
              <p className="font-inter font-[500] text-[12px] text-[#5F6D7E] lowercase">
                PAGO SERVICIOS PRESTADO
              </p>
            </div>
            <div className="text-center">
              <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E] lowercase">
                RETENCION SERVICIOS PRESTADOS
              </p>
            </div>
            <div className="text-center">
              <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E] lowercase">
                PAGO DIVIDENDO
              </p>
            </div>
            <div className=" text-center">
              <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E] lowercase">
                RETENCION DIVIDENDO
              </p>
            </div>
            <div className=" text-center">
              <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E] lowercase">
                RENTA
              </p>
            </div>
            <div className=" text-center">
              <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E] lowercase">
                OTROS PAGOS
              </p>
            </div>
          </div>
          {list.map((item) => (
            <div className="flex justify-between px-5 py-3 border-[1px] border-gray-300 bg-white ">
              <div className="ml-10">
                <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                  {item.plus}
                </p>
              </div>
              <div className="text-center">
                <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                  {item.name}
                </p>
              </div>
              <div className="text-center">
                <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                  {item.name}
                </p>
              </div>
              <div className="text-center">
                <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                  {item.name}
                </p>
              </div>
              <div className="text-center">
                <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                  {item.name}
                </p>
              </div>
              <div className="text-center">
                <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                  {item.name}
                </p>
              </div>
              <div className="text-center">
                <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
          <div className="flex mt-5 gap-10">
            <button className="flex gap-2 px-3 py-2 font-inter font-[500] text-[14px] text-white bg-[#87CD1B] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Exceller
            </button>

            <button className="flex gap-2 px-3 py-2 font-inter font-[500] text-[14px] text-white bg-[#dc2727] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
