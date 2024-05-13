import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import LineGraphs from "../component/linegraph";
import DonutChart from "../component/pie-chart";
import BarChart from "../component/barchart";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Last Year", "2023", "2024"];
const defaultOption = options[0];

export default function Report() {
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
              <div className="flex justify-between">
                <p className="font-inter font-[700] text-[25px] text-black">
                  {/* Reports */}
                  Rapports
                </p>

                <div className="flex gap-3">
                  <p className="hidden md:block self-center font-inter font-[500] text-[18px] text-black">
                    {/* Export */}
                    Exportation
                  </p>

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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                <div className="bg-white p-3 md:p-5  rounded-2xl shadow-md">
                  <div className="flex justify-between">
                    <h2 className="font-inter font-[600] text-[18px] text-black">
                      {/* Graph */}
                      Graphique
                    </h2>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                      className=" text-white"
                    />
                  </div>
                  {/* <LineGraphs /> */}
                </div>

                <div className="bg-white p-3 md:p-5 h-full  rounded-2xl shadow-md">
                  <div className="flex justify-between">
                    <h2 className="font-inter font-[600] text-[18px] text-black">
                      {/* Activity */}
                      Activité
                    </h2>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                      className=" text-white"
                    />
                  </div>

                  {/* <DonutChart /> */}
                </div>
              </div>
              <div>{/* <BarChart /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
