import React from "react";
import classes from "./EnterName.module.css";
import Button from "../../UI/Button";

const EnterName = ({
  enterName,
  handleEnterName,
  handleAddName,
  inputValue,
}) => {
  return (
    <React.Fragment>
      <div className={classes["entername_name-input"]}>
        <h3 className={classes["entername_name"]}>Please enter name</h3>
        <input
          type="text"
          className={classes["entername_input"]}
          onChange={handleEnterName}
          value={inputValue}
        />
        <Button
          className={classes["entername_name-btn"]}
          onClick={handleAddName}
        >
          Add Name
        </Button>
      </div>
    </React.Fragment>
  );
};

export default EnterName;
