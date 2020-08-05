import React, { useState, useEffect } from "react";
import Tabular from "../../components/UI/Tabular/Tabular";
import Table from "../../components/UI/Table/Table";
import LineChart from "../../components/UI/Chart/LineChart/LineChart";
import ColumnChart from "../../components/UI/Chart/ColumnChart/ColumnChart";
import { fetchData } from "../../assets/scripts/api";

const Affected = (props) => {
  const [globalCount, setGlobalCount] = useState([]);
  const [countriesCount, setCountriesCount] = useState([]);
  const [outbreakData, setOutbreakData] = useState([]);
  const [topTenCountires, setTopTenCountries] = useState([]);

  useEffect(() => {
    let updateState = true;

    const fetchGlobalData = async () => {
      const data = await fetchData("/v3/stats/worldometer/global");

      if (updateState) setGlobalCount(data);
    };

    fetchGlobalData();

    const fetchCountriesData = async () => {
      const data = await fetchData("/v3/stats/worldometer/country");

      if (updateState) setCountriesCount(data);
    };

    fetchCountriesData();

    const fetchOutbreakData = async () => {
      const data = await fetchData("/v3/stats/worldometer/totalTrendingCases");

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
      const data = await fetchData("/v3/analytics/dailyNewStats?limit=10");

      if (updateState) setTopTenCountries(data);
    };

    fetchTopTenNew();

    return () => {
      updateState = false;
    };
  }, []);

  const createLineDataPoints = (arrData, type) => {
    const newData = arrData.map((data) => {
      const [month, day, year] = new Date(data.lastUpdated)
        .toLocaleDateString()
        .split("/");

      return {
        x: new Date(`${year}- ${month}- ${day}`),
        y:
          type === "confirmed"
            ? data.totalConfirmed
            : type === "recovered"
            ? data.totalRecovered
            : data.totalDeaths,
      };
    });

    return newData;
  };

  const createColumDataPoints = (arrData) => {
    const newData = arrData
      .filter((data) => data.country !== "World")
      .map((data) => {
        return {
          y: data.daily_cases,
          label: data.country,
        };
      });

    return newData;
  };

  const confirmed = createLineDataPoints(outbreakData, "confirmed");
  const recovered = createLineDataPoints(outbreakData, "recovered");
  const deaths = createLineDataPoints(outbreakData, "deaths");
  const topTen = createColumDataPoints(topTenCountires);

  return (
    <div className="container m-t">
      <div className="row border rounded py-2">
        <Tabular global={globalCount} />
      </div>

      <div className="row m-t pb-3">
        <div className="col-md-6">
          <LineChart
            confirmed={confirmed}
            recovered={recovered}
            deaths={deaths}
          />
        </div>

        <ColumnChart topTen={topTen} />
      </div>

      <div className="row table-margin pb-3">
        <Table countries={countriesCount} label="Affected Countries" />
      </div>
    </div>
  );
};

export default Affected;
