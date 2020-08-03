import React from "react";
import Aux from "../Auxilliary/Auxiliiary";

const Layout = (props) => {
  return (
    <Aux>
      <h1>Header</h1>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
