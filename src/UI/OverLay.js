import React from "react";
import classes from "./OverLay.module.css";
// import Button from "./Button";
import { Link } from "react-router-dom";

const OverLay = ({ onStartGame }) => {
  return (
    <div className={classes["overlay_container"]}>
      <div className={classes["over_lay"]}>
        <h1 className={classes["overlay_title"]}>Mortal Pokemon-bat</h1>
        <h2 className={classes["overlay_start-title"]}>Press to start Game!</h2>
        <Link to="/start" className={classes["overlay_start-link"]}>
          Start
        </Link>
      </div>
    </div>
  );
};

export default OverLay;
