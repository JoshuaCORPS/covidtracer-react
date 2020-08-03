import React from "react";

const Recovered = ({ recovered }) => (
  <div className="col-12 col-md-4">
    <div className="container py-3 text-center">
      <div className="py-2 bg-green rounded shadow text-green font-weight-bold fontStats">
        {recovered}
        <div className="my-1 border-top border-green marginDivider"></div>
        <span className="pt-1 d-block fontLabel">Recovered</span>
      </div>
    </div>
  </div>
);

export default Recovered;
