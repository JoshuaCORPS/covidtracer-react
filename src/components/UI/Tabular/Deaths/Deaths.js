import React from "react";

const Deaths = ({ deaths }) => (
  <div className="col-12 col-md-4">
    <div className="container py-3 text-center">
      <div className="py-2 bg-red rounded shadow text-red font-weight-bold fontStats">
        {deaths}
        <div className="my-1 border-top border-red marginDivider"></div>
        <span className="pt-1 d-block fontLabel">Deaths</span>
      </div>
    </div>
  </div>
);

export default Deaths;
