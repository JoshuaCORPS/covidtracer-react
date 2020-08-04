import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import Tabular from "../../components/UI/Tabular/Tabular";
import Table from "../../components/UI/Table/Table";
import {
  getGlobalCount,
  getCountriesCount,
  getOutbreakOvertime,
  getTopTenCountries,
} from "../../assets/scripts/api";

import CanvasJSReact from "../../assets/scripts/canvasjs.react";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Affected = (props) => {
  const [globalCount, setGlobalCount] = useState([]);
  const [countriesCount, setCountriesCount] = useState([]);
  const [outbreakData, setOutbreakData] = useState([]);
  const [topTenCountires, setTopTenCountries] = useState([]);

  useEffect(() => {
    let updateState = true;

    const fetchGlobalData = async () => {
      const data = await getGlobalCount();

      if (updateState) setGlobalCount(data);
    };

    fetchGlobalData();

    const fetchCountriesData = async () => {
      const data = await getCountriesCount();

      if (updateState) setCountriesCount(data);
    };

    fetchCountriesData();

    const fetchOutbreakData = async () => {
      const data = await getOutbreakOvertime();

      const oneMonthData = [];
      for (let i = 0; i < 31; i++) {
        if (data[i]) oneMonthData.push(data[i]);
        else {
          oneMonthData.push(oneMonthData[oneMonthData.length - 1]);
        }
      }

      if (updateState) {
        setOutbreakData(oneMonthData.reverse());
      }
    };

    fetchOutbreakData();

    const fetchTopTenNew = async () => {
      const data = await getTopTenCountries();

      if (updateState) setTopTenCountries(data);
    };

    fetchTopTenNew();

    return () => {
      updateState = false;
    };
  }, []);

  console.log();

  const confirmed = [
    {
      x: new Date("2020- 07- 05"),
      y: 11546493,
    },
    {
      x: new Date("2020- 07- 06"),
      y: 11731481,
    },
    {
      x: new Date("2020- 07- 07"),
      y: 11939593,
    },
    {
      x: new Date("2020- 07- 08"),
      y: 12154674,
    },
    {
      x: new Date("2020- 07- 09"),
      y: 12377283,
    },
    {
      x: new Date("2020- 07- 10"),
      y: 12614084,
    },
    {
      x: new Date("2020- 07- 11"),
      y: 12832733,
    },
    {
      x: new Date("2020- 07- 12"),
      y: 13025672,
    },
    {
      x: new Date("2020- 07- 13"),
      y: 13226361,
    },
    {
      x: new Date("2020- 07- 14"),
      y: 13445299,
    },
    {
      x: new Date("2020- 07- 15"),
      y: 13670864,
    },
    {
      x: new Date("2020- 07- 16"),
      y: 13924306,
    },
    {
      x: new Date("2020- 07- 17"),
      y: 14174332,
    },
    {
      x: new Date("2020- 07- 18"),
      y: 14407643,
    },
    {
      x: new Date("2020- 07- 19"),
      y: 14628923,
    },
    {
      x: new Date("2020- 07- 20"),
      y: 14844353,
    },
  ];

  const recovered = [
    { x: new Date("2020- 07- 05"), y: 6433931 },
    { x: new Date("2020- 07- 06"), y: 6531107 },
    { x: new Date("2020- 07- 07"), y: 6752675 },
    { x: new Date("2020- 07- 08"), y: 6940284 },
    { x: new Date("2020- 07- 09"), y: 7085142 },
    { x: new Date("2020- 07- 10"), y: 7224985 },
    { x: new Date("2020- 07- 11"), y: 7377717 },
    { x: new Date("2020- 07- 12"), y: 7473907 },
    { x: new Date("2020- 07- 13"), y: 7611104 },
    { x: new Date("2020- 07- 14"), y: 7745927 },
    { x: new Date("2020- 07- 15"), y: 7867015 },
    { x: new Date("2020- 07- 16"), y: 8166465 },
    { x: new Date("2020- 07- 17"), y: 8265557 },
    { x: new Date("2020- 07- 18"), y: 8478837 },
    { x: new Date("2020- 07- 19"), y: 8606542 },
    { x: new Date("2020- 07- 20"), y: 8730131 },
  ];

  const deaths = [
    { x: new Date("2020- 07- 05"), y: 532856 },
    { x: new Date("2020- 07- 06"), y: 536444 },
    { x: new Date("2020- 07- 07"), y: 541079 },
    { x: new Date("2020- 07- 08"), y: 547498 },
    { x: new Date("2020- 07- 09"), y: 552435 },
    { x: new Date("2020- 07- 10"), y: 557494 },
    { x: new Date("2020- 07- 11"), y: 563137 },
    { x: new Date("2020- 07- 12"), y: 567024 },
    { x: new Date("2020- 07- 13"), y: 572227 },
    { x: new Date("2020- 07- 14"), y: 576485 },
    { x: new Date("2020- 07- 15"), y: 581561 },
    { x: new Date("2020- 07- 16"), y: 587144 },
    { x: new Date("2020- 07- 17"), y: 591835 },
    { x: new Date("2020- 07- 18"), y: 599582 },
    { x: new Date("2020- 07- 19"), y: 604150 },
    { x: new Date("2020- 07- 20"), y: 608533 },
  ];

  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Stock Movement",
    },
    axisX: {
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "Stock In Hand",
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
        dataPoints: confirmed,
      },
      {
        type: "line",
        showInLegend: true,
        name: "Confirmed",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        markerSize: 5,
        dataPoints: recovered,
      },
      {
        type: "line",
        showInLegend: true,
        name: "Deaths",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        markerSize: 5,
        dataPoints: deaths,
      },
    ],
  };

  return (
    <div className="container m-t">
      <div className="row border rounded py-2">
        <Tabular global={globalCount} />
      </div>

      <div className="row m-t pb-3">
        {/* <div className="col-md-6">{LineChart}</div>
        <div className="col-md-6">{BarChart}</div> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>

      <div className="row m-t pb-3">
        <Table countries={countriesCount} label="Affected Countries" />
      </div>
    </div>
  );
};

export default Affected;

// import CanvasJSReact from "../../assets/scripts/canvasjs.react";
// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class LineChart extends Component {
//   render() {
//     const options = {
//       animationEnabled: true,
//       exportEnabled: true,
//       theme: "light2", // "light1", "dark1", "dark2"
//       title: {
//         text: "Bounce Rate by Week of Year",
//       },
//       axisY: {
//         title: "Bounce Rate",
//         includeZero: false,
//         suffix: "%",
//       },
//       axisX: {
//         title: "Week of Year",
//         prefix: "W",
//         interval: 2,
//       },
//       data: [
//         {
//           type: "line",
//           toolTipContent: "Week {x}: {y}%",
//           dataPoints: [
//             { x: 1, y: 64 },
//             { x: 2, y: 61 },
//             { x: 3, y: 64 },
//             { x: 4, y: 62 },
//             { x: 5, y: 64 },
//             { x: 6, y: 60 },
//             { x: 7, y: 58 },
//             { x: 8, y: 59 },
//             { x: 9, y: 53 },
//             { x: 10, y: 54 },
//             { x: 11, y: 61 },
//             { x: 12, y: 60 },
//             { x: 13, y: 55 },
//             { x: 14, y: 60 },
//             { x: 15, y: 56 },
//             { x: 16, y: 60 },
//             { x: 17, y: 59.5 },
//             { x: 18, y: 63 },
//             { x: 19, y: 58 },
//             { x: 20, y: 54 },
//             { x: 21, y: 59 },
//             { x: 22, y: 64 },
//             { x: 23, y: 59 },
//           ],
//         },
//       ],
//     };

//     return (
//       <div>
//         <h1>React Line Chart</h1>
//         <CanvasJSChart
//           options={options}
//           /* onRef={ref => this.chart = ref} */
//         />
//         {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//       </div>
//     );
//   }
// }

//=======================================================
// const LineChart = outbreakData.length && (
//   <Line
//     data={{
//       labels: outbreakData.map(({ lastUpdated }) =>
//         new Date(lastUpdated).toLocaleDateString()
//       ),
//       datasets: [
//         {
//           data: outbreakData.map((data) => data.totalConfirmed),
//           label: "Confirmed",
//           borderColor: "orange",
//           fill: true,
//         },
//         {
//           data: outbreakData.map((data) => data.totalRecovered),
//           label: "Recovered",
//           borderColor: "green",
//           fill: true,
//         },
//         {
//           data: outbreakData.map((data) => data.totalDeaths),
//           label: "Deaths",
//           borderColor: "red",
//           fill: true,
//         },
//       ],
//     }}
//     options={{
//       title: { display: true, text: `Outbreak Over Time` },
//     }}
//   />
// );

// const barChartData = topTenCountires.map(({ daily_cases }) => daily_cases);

// const BarChart = topTenCountires.length && (
//   <Bar
//     data={{
//       labels: topTenCountires.map(({ country }) => country),
//       datasets: [
//         {
//           label: "Total",
//           backgroundColor: [
//             "#99A1C6",
//             "#86DCBD",
//             "#E9A19B",
//             "#82BABD",
//             "#C6A4B8",
//             "#D9E18D",
//             "#88B3C6",
//             "#E9AB83",
//             "#86D0C2",
//             "#B0A2BF",
//           ],
//           data: barChartData,
//         },
//       ],
//     }}
//     options={{
//       legend: { display: false },
//       title: { display: true, text: `Daily New Cases` },
//     }}
//   />
// );
