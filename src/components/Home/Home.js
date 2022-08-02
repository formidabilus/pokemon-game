import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Home.module.css";

import {
  getPokemonImage,
  getRandomPokemon,
} from "../../utility/helperFunctions";

import Card from "../Card/Card";

import "./Home.styles.css";
import ChoiceBtns from "../ChoiceBtns/ChoiceBtns";

const Home = ({ pokemonsList }) => {
  const [pokemonImage, setPokemonImage] = useState([]);

  const newRandomPokemonLeft = getRandomPokemon(pokemonsList);
  const newRandomPokemonRight = getRandomPokemon(pokemonsList);

  function waitForImages() {
    const randomPokemonImageLeft = getPokemonImage(newRandomPokemonLeft);
    const randomPokemonImageRight = getPokemonImage(newRandomPokemonRight);
    setPokemonImage([randomPokemonImageLeft, randomPokemonImageRight]);
  }

  useEffect(() => {
    waitForImages();
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
