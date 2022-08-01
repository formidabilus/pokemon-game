import React from "react";
import "./Card.styles.css";

function Card({ pokemonImage }) {
  return <img className="pokemonImage" src={pokemonImage} alt="pokemon" />;
}

export default Card;
