import React from "react";

const RecoveryRate = ({ recoveryRate }) => (
  <div className="col-12 col-md-6">
    <div className="container py-3 text-center">
      <div className="py-2 bg-green rounded shadow text-green font-weight-bold fontStats">
        {`${recoveryRate}%`}
        <div className="my-1 border-top border-green marginDivider"></div>
        <span className="pt-1 d-block fontLabel">Recovery Rate</span>
      </div>
    </div>
  </div>
);

export default RecoveryRate;
