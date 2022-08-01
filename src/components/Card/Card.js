import React, { useState } from "react";
import "./Card.styles.css";

function Card({ pokemonsList }) {
  const getRandomPokemon = () => {
    const randomNr = Math.floor(Math.random() * 150);
    const randomPokemon = pokemonsList[randomNr];
    console.log(randomPokemon);
    return randomPokemon;
  };

  const getPokemonImage = (pokemon) => {
    const image =
      pokemon &&
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    console.log(image);

    return image;
  };

  const newRandomPokemon = getRandomPokemon();
  console.log(pokemonsList[149]);
  const pokemonImage = getPokemonImage(newRandomPokemon);

  return <img className="pokemonImage" src={pokemonImage} />;
}

export default Card;
