import React from "react";
import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={classes.SkCubeGrid}>
      <div className={`${classes.SkCube} ${classes.SkCube1}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube2}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube3}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube4}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube5}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube6}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube7}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube8}`}></div>
      <div className={`${classes.SkCube} ${classes.SkCube9}`}></div>
    </div>
  );
};

export default Spinner;
