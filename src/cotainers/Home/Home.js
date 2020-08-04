import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Tabular from "../../components/UI/Tabular/Tabular";
import Table from "../../components/UI/Table/Table";
import { getGlobalCount, getCountriesCount } from "../../assets/scripts/api";

const Home = (props) => {
  const [globalCount, setGlobalCount] = useState([]);
  const [countriesCount, setCountriesCount] = useState([]);

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

    return () => {
      updateState = false;
    };
  }, []);

  const viewMoreClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container m-t">
      <div className="row border rounded py-2">
        <Tabular global={globalCount} />
      </div>

      <div className="row m-t pb-3">
        <Table
          countries={countriesCount.slice(0, 10)}
          label="Top 10 Affected Countries"
        />
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/affected-countries" onClick={viewMoreClickHandler}>
          View More
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Home);
