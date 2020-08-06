import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { fetchData } from "../../assets/scripts/api";
import { createCountryLineDataPoints } from "../../assets/scripts/chart";
import Tabular from "../../components/UI/Tabular/Tabular";
import LineChart from "../../components/UI/Chart/LineChart/LineChart";

const Country = (props) => {
  const [countryData, setCountryData] = useState({});
  const [pastMonthData, setPastMonthData] = useState([]);

  const [sMonth, sDay, startYear] = new Date(
    Date.now() - 30 * 24 * 60 * 60 * 1000
  )
    .toLocaleDateString()
    .split("/");

  const startMonth = parseInt(sMonth) < 10 ? `0${sMonth}` : sMonth;
  const startDay = parseInt(sDay) < 10 ? `0${sDay}` : sDay;

  const [eMonth, eDay, endYear] = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    .toLocaleDateString()
    .split("/");

  const endMonth = parseInt(eMonth) < 10 ? `0${eMonth}` : eMonth;
  const endDay = parseInt(eDay) < 10 ? `0${eDay}` : eDay;

  const cc = props.match.params.cc.toLowerCase();

  useEffect(() => {
    let updateState = true;

    const fetchCountryData = async () => {
      const data = await fetchData("/v3/stats/worldometer/country");

      let filteredCountryData = {};

      for (let country of data) {
        if (
          country.countryCode &&
          country.countryCode.toLowerCase() ===
            props.match.params.cc.toLowerCase()
        )
          filteredCountryData = { ...country };
      }

      if (updateState) setCountryData(filteredCountryData);
    };

    fetchCountryData();

    const fetchCountryPastMonthData = async () => {
      const data = await fetchData(
        `v3/analytics/trend/country?countryCode=${cc}&startDate=${startYear}-${startMonth}-${startDay}&endDate=${endYear}-${endMonth}-${endDay}`
      );

      if (updateState) setPastMonthData(data);
    };

    fetchCountryPastMonthData();

    return () => {
      updateState = false;
    };
  }, [
    props.match.params.cc,
    cc,
    startYear,
    startMonth,
    startDay,
    endYear,
    endMonth,
    endDay,
  ]);

  const confirmed = createCountryLineDataPoints(pastMonthData, "confirmed");
  const recovered = createCountryLineDataPoints(pastMonthData, "recovered");
  const deaths = createCountryLineDataPoints(pastMonthData, "deaths");

  return (
    <div className="container m-t">
      <div className="row border rounded py-2">
        <div className="col-12">
          <span className="font-weight-bold" style={{ fontSize: "25px" }}>
            <i
              className={`pr-5 flag-icon flag-icon-${
                countryData.countryCode && countryData.countryCode.toLowerCase()
              }`}
            ></i>
            {countryData.country} Overview
          </span>
        </div>

        <Tabular global={countryData} />
      </div>

      <div className="row table-margin pb-3">
        <div className="col-12">
          <LineChart
            confirmed={confirmed}
            recovered={recovered}
            deaths={deaths}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Country);
