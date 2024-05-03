import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import BenefitTable from "../component/benefit-table";

export default function BenefitsManagement() {
  return (
    <>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-2 2xl:col-span-2 ">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 2xl:col-span-10 h-[100vh] overflow-y-scroll">
          <Navbar />
          <div className="bg-[#f0f4f8]">
            <div className="w-[95%] mx-auto py-10">
              <div className=" ">
                <p className="text-center font-inter font-[700] text-[16px] md:text-[25px] text-black">
                INFORME DE PAGOS
                </p>


              </div>
              <BenefitTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
