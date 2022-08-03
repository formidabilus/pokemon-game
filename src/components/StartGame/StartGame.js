import React from "react";
import { Link } from "react-router-dom";
import classes from "./StartGame.module.css";

const StartGame = () => {
  return (
    <div className={classes["over_lay"]}>
      <h2 className={classes["overlay_start-title"]}>Press to start Game!</h2>
      <Link to="/start" className={classes["overlay_start-link"]}>
        Start
      </Link>
    </div>
  );
};

export default StartGame;
