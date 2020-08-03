import React from "react";

const DeathRate = ({ deathRate }) => (
  <div className="col-12 col-md-6">
    <div className="container py-3 text-center">
      <div className="py-2 bg-red rounded shadow text-red font-weight-bold fontStats">
        {`${deathRate}%`}
        <div className="my-1 border-top border-red marginDivider"></div>
        <span className="pt-1 d-block fontLabel">Death Rate</span>
      </div>
    </div>
  </div>
);

export default DeathRate;
