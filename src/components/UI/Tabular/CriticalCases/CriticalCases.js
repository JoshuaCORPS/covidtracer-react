import React from "react";
import CountUp from "react-countup";

const CriticalCases = ({ totalCritical }) => (
  <div className="col-12 col-md-4">
    <div className="container py-3 text-center">
      <div className="py-2 bg-red rounded shadow text-red font-weight-bold fontStats">
        <CountUp
          start={0}
          end={totalCritical ? totalCritical : 0}
          duration={2.5}
          separator=","
        />
        <div className="my-1 border-top border-red marginDivider"></div>
        <span className="pt-1 d-block fontLabel">Critical Cases</span>
      </div>
    </div>
  </div>
);

export default CriticalCases;
