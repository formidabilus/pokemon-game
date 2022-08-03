import React, { useState } from "react";
import classes from "./Start.module.css";
import StartGame from "./StartGame";
import EnterName from "../EnterName/EnterName";
import NameDisplay from "../EnterName/NameDisplay";

const Start = () => {
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
    <React.Fragment>
      <div className={classes["overlay_container"]}>
        <div className={classes["overlay_wrapp"]}>
          <div className={classes["over_lay"]}>
            <h1 className={classes["overlay_title"]}>Pokemon The Game</h1>
            {displayStart && <NameDisplay enterName={enterName} />}
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
    </React.Fragment>
  );
};

export default Start;
