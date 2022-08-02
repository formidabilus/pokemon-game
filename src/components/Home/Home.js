import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Home.module.css";

import {
  getPokemonImage,
  getRandomPokemon,
} from "../../utility/helperFunctions";

import Card from "../Card/Card";

import "./Home.styles.css";

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);
  const getPokemonsData = async () => {
    const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon?limit=150";
    const response = await axios.get(pokemonApiUrl).catch((error) => {
      if (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
    const pokemonsResult = response.data.results;

    const individualPokemons = await Promise.all(
      pokemonsResult.map(async (pokemon) => {
        const individualPokemon = await axios
          .get(pokemon.url)
          .catch((error) => {
            if (error) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
        return { ...individualPokemon.data };
      })
    );
    console.log(individualPokemons);
    setPokemonsList(individualPokemons);
  };

  useEffect(() => {
    getPokemonsData();
    const newRandomPokemonLeft = getRandomPokemon(pokemonsList);
    const newRandomPokemonRight = getRandomPokemon(pokemonsList);
    const randomPokemonImageLeft = getPokemonImage(newRandomPokemonLeft);
    const randomPokemonImageRight = getPokemonImage(newRandomPokemonRight);

    setPokemonImage([randomPokemonImageLeft, randomPokemonImageRight]);
  }, []);

  const leftPokemonImage = pokemonImage[0];
  const rightPokemonImage = pokemonImage[1];

  return (
    <div className={classes["home_container"]}>
      <div className={classes["home"]}>
        <div className={classes["home_card-container"]}>
          <div className={classes["cards-wrapper"]}>
            <Card pokemonImage={leftPokemonImage} />
            <p className={classes["vs-text"]}>VS</p>
            <Card pokemonImage={rightPokemonImage} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
