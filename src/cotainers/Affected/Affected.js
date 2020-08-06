import React, { useState, useEffect } from "react";
import { fetchData } from "../../assets/scripts/api";
import { ColumnChart, LineChart, Table, Tabular } from "../../components/UI";
import {
  createAffectedLineDataPoints,
  createColumDataPoints,
} from "../../assets/scripts/chart";

const Affected = () => {
  const [globalCount, setGlobalCount] = useState([]);
  const [countriesCount, setCountriesCount] = useState([]);
  const [outbreakData, setOutbreakData] = useState([]);
  const [topTenCountires, setTopTenCountries] = useState([]);

  useEffect(() => {
    let updateState = true;

    try {
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
        const data = await fetchData(
          "/v3/stats/worldometer/totalTrendingCases"
        );

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
    } catch (err) {
      console.log(err);
    }

    return () => {
      updateState = false;
    };
  }, []);

  const confirmed = createAffectedLineDataPoints(outbreakData, "confirmed");
  const recovered = createAffectedLineDataPoints(outbreakData, "recovered");
  const deaths = createAffectedLineDataPoints(outbreakData, "deaths");
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
