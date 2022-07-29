import React, { useState } from "react";
import Home from "../components/Home";
import OverLay from "../UI/OverLay";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [start, setStart] = useState(true);
  const handleStart = () => {
    setStart((prev) => !prev);
  };

  return (
    <div className={classes["home_page"]}>
      {start && <OverLay onStartGame={handleStart} />}
      <Home />
    </div>
  );
};

export default HomePage;
