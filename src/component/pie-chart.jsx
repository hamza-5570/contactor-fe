import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  // State for the selected time range
  const [timeRange, setTimeRange] = useState("Last 7 Days");

  // Data for the donut chart
  const series = [40, 15, 20, 15, 10]; // Your data values

  // Labels for the donut chart
  const labels = ["Health", "Retirement", "Disability", "Death", "Example"];

  // Chart options
  const options = {
    labels: labels,

    legend: {
      show: true,
      position: "right",
      horizontalAlign: "right",
      floating: false,
      fontSize: "14px",
      formatter: function (seriesName, opts) {
        return (
          seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + "%"
        );
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // You can perform calculations to show total if needed
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + "%";
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 600, // breakpoint for mobile devices
        options: {
          chart: {
            width: "100%", // use a percentage-based width for fluid resizing
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Handle time range change
  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
    // You can also update the series data based on the selected time range
  };

  return (
    <div className="row md:flex  md:gap-10 lg:gap-0 xl:gap-10">
      <div className="mixed-chart mt-10">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width="300"
        />
      </div>

      <div className="self-center mt-5 md:mt-10 w-[90%] mx-auto">
        <ul className="hidden md:block">
          <li className="health font-inter font-[500] text-[14px]">
            {" "}
            <span className="text-black">Santé</span>
          </li>
          <li className="health2 font-inter font-[500] text-[14px] mt-5">
            {" "}
            <span className="text-black">Retraite</span>
          </li>

          <li className="health3 font-inter font-[500] text-[14px] mt-5">
            {" "}
            <span className="text-black">Infirmité</span>
          </li>
          <li className="health4 font-inter font-[500] text-[14px] mt-5">
            {" "}
            <span className="text-black">Mort</span>
          </li>

          <li className="health5 font-inter font-[500] text-[14px] mt-5">
            {" "}
            <span className="text-black">Exemple</span>
          </li>
        </ul>

        <ul className="block md:hidden">
          <div className="flex justify-between">
            <li className="health font-inter font-[500] text-[14px]">
              {" "}
              <span className="text-black">Santé</span>
            </li>
            <li className="health2 font-inter font-[500] text-[14px] ">
              {" "}
              <span className="text-black">Retraite</span>
            </li>
            <li className="health3 font-inter font-[500] text-[14px] ">
              {" "}
              <span className="text-black">Infirmité</span>
            </li>
          </div>

          <div className="flex justify-center mt-5 gap-24">
            <li className="health4 font-inter font-[500] text-[14px] ">
              {" "}
              <span className="text-black">Mort</span>
            </li>

            <li className="health5 font-inter font-[500] text-[14px] ">
              {" "}
              <span className="text-black">Exemple</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DonutChart;
