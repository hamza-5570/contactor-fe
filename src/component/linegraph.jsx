import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineGraphs = () => {
  // Sample data for three lines
  const series = [
    {
      name: "Line 1",
      data: [1000, 1500, 5000, 1500, 4500, 3500],
    },
    {
      name: "Line 2",
      data: [1800, 2000, 3500, 2000, 3000, 2800],
    },
    {
      name: "Line 3",
      data: [3000, 3100, 4700, 3000, 4500, 4000],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    colors: ["#87CD1B", "#21CBE2", "#FE6B03"],
    stroke: {
      width: [2, 2, 2], // Set the stroke width for each line
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: true,
        color: "#78909C", // Customize the color as needed
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },

    yaxis: {
      axisBorder: {
        show: true,
        color: "#78909C",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
  };

  const [chartHeight, setChartHeight] = useState("300"); // Default height

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        // Mobile width
        setChartHeight("200"); // Smaller height for mobile
        // Additional mobile-specific settings can go here
      } else {
        setChartHeight("300"); // Desktop height
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={chartHeight}
    />
  );
};

export default LineGraphs;
