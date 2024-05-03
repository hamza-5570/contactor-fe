import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileViewWidth = 768; // width in pixels to switch to mobile view

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chartHeight = windowWidth < mobileViewWidth ? 200 : 350; // smaller height for mobile

  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [60, 65, 40, 80, 30, 30, 40],
      },
      {
        name: "series2",
        data: [38, 20, 30, 10, 20, 25, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      //   color: ["#40BAFF"],
      colors: ["#40BAFF", "#40BAFF"],

      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2],
        colors: ["#64BE33", "#ac5080"],

        curve: "smooth",
      },

      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        // height={350}
      />
    </div>
  );
};

export default ApexChart;
