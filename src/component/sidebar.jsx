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
            CONTRATISTAS / SUPLIDORES
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
      </div>
    </>
  );
}
