import React from "react";
import classes from "./Card.module.css";

function Card({ pokemonImage }) {
  return <img className={classes.pokemonImage} src={pokemonImage} alt="" />;
}

export default Card;
