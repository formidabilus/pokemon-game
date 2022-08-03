import React, { useState } from "react";
import classes from "./OverLay.module.css";
import StartGame from "../components/StartGame/StartGame";
import EnterName from "../components/EnterName/EnterName";

const OverLay = () => {
  const [enterName, setEnterName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [displayStart, setDisplayStart] = useState(false);

  const handleEnterName = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddName = () => {
    setEnterName(inputValue);
    setDisplayStart(true);
  };

  return (
    <div className={classes["overlay_container"]}>
      <div className={classes["overlay_wrapp"]}>
        <div className={classes["over_lay"]}>
          <h1 className={classes["overlay_title"]}>Pokemon The Game</h1>
          {displayStart && (
            <h2 className={classes["overlay_entername"]}>Name: {enterName}</h2>
          )}
          {!displayStart ? (
            <EnterName
              enterName={enterName}
              handleEnterName={handleEnterName}
              handleAddName={handleAddName}
              inputValue={inputValue}
            />
          ) : (
            <StartGame />
          )}
        </div>
      </div>
    </div>
  );
};

export default OverLay;
