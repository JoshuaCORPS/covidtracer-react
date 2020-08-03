import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Aux from "../../hoc/Auxilliary/Auxiliiary";
import Home from "../../components/Home/Home";

const Overview = (props) => {
  const [globalCount, setGlobalCount] = useState([]);
  const [countryCount, setCountryCount] = useState([]);

  useEffect(() => {
    (async () => {
      const totalWorldCount = await axios.get("/v3/stats/worldometer/global");
      const totalCountryCount = await axios.get(
        "/v3/stats/worldometer/country"
      );
      setGlobalCount(totalWorldCount.data);
      setCountryCount(totalCountryCount.data);
    })();
  }, []);

  return (
    <Aux>
      <Switch>
        <Route
          path="/"
          component={() => (
            <Home global={globalCount} countries={countryCount} />
          )}
        />
      </Switch>
    </Aux>
  );
};

export default Overview;
