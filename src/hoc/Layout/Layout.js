import React from "react";
import Aux from "../Auxilliary/Auxiliiary";
import Navigation from "../../components/UI/Navigation/Navigation";

const Layout = (props) => {
  return (
    <Aux>
      <Navigation />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
