import React from "react";
import OverLay from "../components/StartGame/Start";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes["home_page"]}>
      <OverLay />
    </div>
  );
};

export default HomePage;
