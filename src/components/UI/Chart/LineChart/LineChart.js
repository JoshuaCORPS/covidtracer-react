import React from "react";
import CanvasJSReact from "../../../../assets/scripts/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = (props) => {
  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Outbreak Over Time",
    },
    axisX: {
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "Past 30 Days",
      includeZero: false,
      crosshair: {
        enabled: true,
      },
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      verticalAlign: "bottom",
      horizontalAlign: "left",
      dockInsidePlotArea: true,
    },
    data: [
      {
        type: "line",
        showInLegend: true,
        name: "Confirmed",
        markerType: "square",
        color: "orange",
        xValueFormatString: "DD MMM, YYYY",
        markerSize: 5,
        lineColor: "orange",
        dataPoints: props.confirmed,
      },
      {
        type: "line",
        showInLegend: true,
        name: "Recovered",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        markerSize: 5,
        dataPoints: props.recovered,
      },
      {
        type: "line",
        showInLegend: true,
        name: "Deaths",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        markerSize: 5,
        dataPoints: props.deaths,
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};

export default LineChart;
