import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function LineGraph() {
  const options = {
    animationEnabled: true,

    data: [
      {
        type: "splineArea",

        showInLegend: true,
        dataPoints: [
          { x: new Date(2008, 0), y: 50 },
          { x: new Date(2009, 0), y: 50.1 },
          { x: new Date(2010, 0), y: 50.2 },
          { x: new Date(2012, 0), y: 50.3 },
          { x: new Date(2014, 0), y: 48 },
          { x: new Date(2015, 0), y: 49 },
          { x: new Date(2015, 0), y: 49 },
          { x: new Date(2015, 0), y: 49 },
          { x: new Date(2015, 0), y: 49 },
          { x: new Date(2015, 0), y: 49 },
        ],
      },
    ],
  };

  return (
    <>
      <div
        style={{
          height: "20px",
          width: "250px",
        }}
        className="main hidden md:block"
      >
        <CanvasJSChart options={options} />
      </div>
    </>
  );
}
