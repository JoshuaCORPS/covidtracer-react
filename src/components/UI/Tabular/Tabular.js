import React from "react";
import { withRouter } from "react-router-dom";
import Confirmed from "./Confirmed/Confirmed";
import Recovered from "./Recovered/Recovered";
import Deaths from "./Deaths/Deaths";
import RecoveryRate from "./RecoveryRate/RecoveryRate";
import DeathRate from "./DeathRate/DeathRate";
import CriticalCases from "./CriticalCases/CriticalCases";
import ActiveCases from "./ActiveCases/ActiveCases";
import DailyCases from "./DailyCases/DailyCases";
import Aux from "../../../hoc/Auxilliary/Auxiliiary";

const Tabular = ({ global, location, match }) => {
  const calcRate = (totalCase, totalConfirmed) => {
    return ((totalCase / totalConfirmed) * 100).toFixed(2);
  };

  const rates =
    location.pathname === "/affected-countries" ||
    location.pathname === "/affected-countries/" ||
    match.path === "/affected-countries/:cc" ? (
      <Aux>
        <RecoveryRate
          recoveryRate={calcRate(global.totalRecovered, global.totalConfirmed)}
        />
        <DeathRate
          deathRate={calcRate(global.totalDeaths, global.totalConfirmed)}
        />
      </Aux>
    ) : null;

  const cases = match.path === "/affected-countries/:cc" && (
    <Aux>
      <CriticalCases totalCritical={global.totalCritical} />
      <ActiveCases activeCases={global.activeCases} />
      <DailyCases dailyConfirmed={global.dailyConfirmed} />
    </Aux>
  );

  return (
    <Aux>
      <Confirmed confirmed={global.totalConfirmed} />
      <Recovered recovered={global.totalRecovered} />
      <Deaths deaths={global.totalDeaths} />
      {rates}
      {cases}
    </Aux>
  );
};

export default withRouter(Tabular);
