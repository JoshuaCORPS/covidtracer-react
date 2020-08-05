import React from "react";
import CanvasJSReact from "../../../../assets/scripts/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ColumnChart = (props) => {
  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Daily New Cases",
    },
    axisY: {
      title: "Top 10 Countries",
    },
    data: [
      {
        type: "column",
        dataPoints: props.topTen,
      },
    ],
  };

  return (
    <div className="col-md-6">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default ColumnChart;
