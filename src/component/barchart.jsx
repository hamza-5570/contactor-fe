import React from "react";
import Chart from "react-apexcharts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "20%", // Adjust the bar height if needed
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1, // Decrease stroke width (border of the bar)
          colors: ["transparent"], // Makes the border transparent
        },
        xaxis: {
          categories: ["Santé", "Retraite", "Mort", "Infirmité", "Exemple"],
        },
        colors: ["#63D2F5", "#494892", "#FB67CA", "#5E83F5", "#FE6B03"],
      },
      series: [
        {
          data: [80, 60, 40, 20, 10], // dummy data
        },
      ],
      chartHeight: 350,
    };
    this.updateChartHeight = this.updateChartHeight.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateChartHeight);
    this.updateChartHeight(); // Set initial height based on current window size
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateChartHeight);
  }

  updateChartHeight() {
    const newHeight = window.innerWidth < 600 ? 180 : 350; // Example: 200px height for mobile
    this.setState({ chartHeight: newHeight });
  }

  render() {
    return (
      <div className="bg-white p-5 h-full  rounded-2xl shadow-md mt-10">
        <h2 className="font-inter font-[600] text-[18px] text-black">
          {/* Activity */}
          Activité
        </h2>
        <div id="chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={this.state.chartHeight}
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
