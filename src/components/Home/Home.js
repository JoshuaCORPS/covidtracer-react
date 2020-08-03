import React from "react";
import { Link, withRouter, Route } from "react-router-dom";
import Tabular from "../UI/Tabular/Tabular";
import Table from "../UI/Table/Table";
import Affected from "../../cotainers/Affected/Affected";

const Home = (props) => {
  const viewMoreClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const table =
    props.location.pathname === "/affected-countries" ? (
      <Table countries={props.countries} label="Affected Countries" />
    ) : (
      <Table
        countries={props.countries.slice(0, 10)}
        label="Top 10 Affected Countries"
      />
    );

  const viewMoreBtn = props.location.pathname === "/" && (
    <div className="d-flex justify-content-center">
      <Link to="/affected-countries" onClick={viewMoreClickHandler}>
        View More
      </Link>
    </div>
  );

  return (
    <div className="container m-t">
      <div className="row border rounded py-2">
        <Tabular global={props.global} />
      </div>

      <Route
        path="/affected-countries"
        component={() => (
          <Affected global={props.global} countries={props.countries} />
        )}
      />

      <div className="row m-t pb-3">{table}</div>
      {viewMoreBtn}
    </div>
  );
};

export default withRouter(Home);
