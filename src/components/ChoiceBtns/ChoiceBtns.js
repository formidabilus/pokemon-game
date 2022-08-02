import React, { useState, useEffect } from "react";
import Button from "../../UI/Button";
import classes from "./ChoiceBtns.module.css";

const ChoiceBtns = () => {
  return (
    <div className={classes["choice_button-container"]}>
      <p className={classes["choice_text"]}>Please select choice:</p>
      <Button className={classes["choice_buttons"]}>Win</Button>
      <Button className={classes["choice_buttons"]}>Draw</Button>
      <Button className={classes["choice_buttons"]}>Lose</Button>
    </div>
  );
};

export default ChoiceBtns;
