import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Affected from "./cotainers/Affected/Affected";
import Home from "./cotainers/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (props) => {
  return (
    <div className="container">
      <Layout>
        <Switch>
          <Route path="/affected-countries" component={Affected} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
