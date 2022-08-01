import React from "react";
import classes from "./OverLay.module.css";
import Button from "./Button";

const OverLay = ({ onStartGame }) => {
  return (
    <div className={classes["overlay_container"]}>
      <div className={classes["over_lay"]}>
        <h1 className={classes["overlay_title"]}>Mortal Pokemon Combat</h1>
        <h2 className={classes["overlay_title"]}>Press to start Game!</h2>
        <Button className={classes["overlay_btn"]} onClick={onStartGame}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default OverLay;
