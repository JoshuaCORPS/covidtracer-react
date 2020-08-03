import React from "react";
import { Link } from "react-router-dom";

const Table = ({ countries, label }) => {
  const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const topCountries = countries.map((country, i) => {
    if (country.countryCode && country.countryCode !== "OT") {
      return (
        <tr key={i}>
          <td>
            <Link
              to={`/affected-countries/${country.countryCode.toLowerCase()}`}
            >
              <i
                className={`pr-5 flag-icon flag-icon-${country.countryCode.toLowerCase()}`}
              ></i>
              {country.country}
            </Link>
          </td>
          <td>
            {country.totalConfirmed && formatNumber(country.totalConfirmed)}
          </td>
          <td>
            {country.totalRecovered && formatNumber(country.totalRecovered)}
          </td>
          <td>{country.totalDeaths && formatNumber(country.totalDeaths)}</td>
        </tr>
      );
    }
  });

  return (
    <div className="col-12 my-2">
      <div className={countries.length > 10 ? "tableHeight" : null}>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th colSpan="4">{label}</th>
            </tr>
            <tr className="clickable-row">
              <th scope="col">Countries</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>{topCountries}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
