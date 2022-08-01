import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.styles.css";

import {
  getPokemonImage,
  getRandomPokemon,
} from "../../utility/helperFunctions";

import Card from "../Card/Card";

import "./Home.styles.css";

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);

  useEffect(() => {
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
        pokemonsResult.map(async (pokemon, index) => {
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

      setPokemonsList(individualPokemons);
    };
    getPokemonsData();
    waitForImages();
  }, []);
  function waitForImages() {
    const newRandomPokemonLeft = getRandomPokemon(pokemonsList);
    const newRandomPokemonRight = getRandomPokemon(pokemonsList);
    const randomPokemonImageLeft = getPokemonImage(newRandomPokemonLeft);
    const randomPokemonImageRight = getPokemonImage(newRandomPokemonRight);

    setPokemonImage([randomPokemonImageLeft, randomPokemonImageRight]);
  }

  const leftPokemonImage = pokemonImage[0];
  const rightPokemonImage = pokemonImage[1];
  return (
    <div className="container">
      <div className="cards-wrapper">
        <Card pokemonImage={leftPokemonImage} />
        <p className="vs-text">VS</p>
        <Card pokemonImage={rightPokemonImage} />
      </div>
      <button className="button-catch" onClick={() => waitForImages()}>
        Catch the Pokemons
      </button>
    </div>
  );
};

export default Home;
