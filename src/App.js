import React from "react";
import Layout from "./hoc/Layout/Layout";
import Spinner from "./components/UI/Spinner/Spinner";
import Overview from "./cotainers/Overview/Overview";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (props) => {
  return (
    <div className="container">
      <Layout>
        <Overview />
        {/* <Spinner /> */}
      </Layout>
    </div>
  );
};

export default App;
