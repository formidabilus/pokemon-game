import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import ChoiceBtns from "../ChoiceBtns/ChoiceBtns";
import {
  getPokemonImage,
  getPokemonTypes,
  getRandomPokemon,
} from "../../utility/helperFunctions";

import classes from "./Home.module.css";
import "./Home.styles.css";

const Home = ({ pokemonsList }) => {
  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  console.log(pokemonTypes);

  const newRandomPokemonLeft = getRandomPokemon(pokemonsList);
  const newRandomPokemonRight = getRandomPokemon(pokemonsList);

  function waitForImages() {
    const randomPokemonImageLeft = getPokemonImage(newRandomPokemonLeft);
    const randomPokemonImageRight = getPokemonImage(newRandomPokemonRight);
    setPokemonImage([randomPokemonImageLeft, randomPokemonImageRight]);
  }

  useEffect(() => {
    waitForImages();
    getPokemonTypes(setPokemonTypes);
  }, []);

  const leftPokemonImage = pokemonImage[0];
  const rightPokemonImage = pokemonImage[1];

  return (
    <div className={classes["home_container"]}>
      <div className={classes["home"]}>
        <div className={classes["home_card-container"]}>
          <div className={classes["cards-wrapper"]}>
            <Card pokemonImage={leftPokemonImage} />
            <p className="vs-text">VS</p>
            <Card pokemonImage={rightPokemonImage} />
          </div>
          <button className="button-catch" onClick={() => waitForImages()}>
            Catch the Pokemons
          </button>
          <div>
            <ChoiceBtns />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
