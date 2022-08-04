import React from "react";
import Start from "../components/StartGame/Start";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes["home_page"]}>
      <Start />
    </div>
  );
};

export default HomePage;
