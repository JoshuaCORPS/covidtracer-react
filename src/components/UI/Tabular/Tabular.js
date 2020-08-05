import React from "react";
import { withRouter } from "react-router-dom";
import Confirmed from "./Confirmed/Confirmed";
import Recovered from "./Recovered/Recovered";
import Deaths from "./Deaths/Deaths";
import RecoveryRate from "./RecoveryRate/RecoveryRate";
import DeathRate from "./DeathRate/DeathRate";
import Aux from "../../../hoc/Auxilliary/Auxiliiary";

const Tabular = ({ global, location }) => {
  const calcRate = (totalCase, totalConfirmed) => {
    return ((totalCase / totalConfirmed) * 100).toFixed(2);
  };

  const rates = location.pathname === "/affected-countries" && (
    <Aux>
      <RecoveryRate
        recoveryRate={calcRate(global.totalRecovered, global.totalConfirmed)}
      />
      <DeathRate
        deathRate={calcRate(global.totalDeaths, global.totalConfirmed)}
      />
    </Aux>
  );

  return (
    <Aux>
      <Confirmed confirmed={global.totalConfirmed} />
      <Recovered recovered={global.totalRecovered} />
      <Deaths deaths={global.totalDeaths} />
      {rates}
    </Aux>
  );
};

export default withRouter(Tabular);