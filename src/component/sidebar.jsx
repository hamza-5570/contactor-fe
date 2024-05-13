import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <>
      <div
        style={{
          background: " rgba(59, 50, 239, 0.7)",
        }}
        className="py-5 h-[100vh] relative  hidden lg:block"
      >
        <p
          onClick={() => handleNavigate("/")}
          className="font-inter font-[700] text-[25px] xl:text-[35px] text-white text-center"
        >
          SigProS
        </p>

        <div className="xl:pl-5  mt-14 xl:mt-14">
          <p
            onClick={() => handleNavigate("/Dashboard")}
            className="flex cursor-pointer gap-2 font-[500] text-[10px] xl:text-[13px] text-white hover:text-[#8D6AFF] hover:bg-white p-4 rounded-l-full"
          >
            CONTRATISTAS/SUPLIDORES
          </p>

          <p
            onClick={() => handleNavigate("/Pagos")}
            className="cursor-pointer font-[500] text-[10px] xl:text-[13px] text-white hover:text-[#8D6AFF] hover:bg-white p-4 rounded-l-full"
          >
            PAGOS
          </p>

          <p
            onClick={() => handleNavigate("/INFORMES")}
            className=" cursor-pointer  font-[500] text-[10px] xl:text-[13px] text-white hover:text-[#8D6AFF] hover:bg-white p-4 rounded-l-full"
          >
            INFORMES
          </p>
        </div>
        {/* 
        <button className="absolute bottom-10 translate-x-[5%] xl:translate-x-[5%] mx-auto flex gap-2 font-[400] text-[14px] xl:text-[16px] text-white border-[1px] border-white py-2 px-6 xl:px-10  rounded-full hover:bg-white hover:text-[#8D6AFF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Déconnexion
        </button> */}
      </div>
    </>
  );
}
