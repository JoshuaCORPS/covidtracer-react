import React from "react";

const Confirmed = ({ confirmed }) => (
  <div className="col-12 col-md-4">
    <div className="container py-3 text-center">
      <div className="py-2 bg-orange rounded shadow text-orange font-weight-bold fontStats">
        {confirmed}
        <div className="my-1 border-top border-orange marginDivider"></div>
        <span className="pt-1 d-block fontLabel">Confirmed</span>
      </div>
    </div>
  </div>
);

export default Confirmed;
