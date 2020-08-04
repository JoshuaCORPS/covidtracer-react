import React from "react";
import CountUp from "react-countup";

const Recovered = ({ recovered }) => (
  <div className="col-12 col-md-4">
    <div className="container py-3 text-center">
      <div className="py-2 bg-green rounded shadow text-green font-weight-bold fontStats">
        <CountUp
          start={0}
          end={recovered ? recovered : 0}
          duration={2.5}
          separator=","
        />
        <div className="my-1 border-top border-green marginDivider"></div>
        <span className="pt-1 d-block fontLabel">Recovered</span>
      </div>
    </div>
  </div>
);

export default Recovered;
