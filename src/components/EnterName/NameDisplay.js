import React, { Fragment } from "react";
import classes from "./NameDisplay.module.css";

const NameDisplay = ({ enterName }) => {
  return (
    <Fragment>
      {<h2 className={classes["start_entername"]}>Name: {enterName}</h2>}
    </Fragment>
  );
};

export default NameDisplay;
