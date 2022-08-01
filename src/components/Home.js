<<<<<<< HEAD
import React from "react";

const Home = () => {
  return <div>Home</div>;
=======
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

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
    console.log(pokemonsList);
  }, []);
  console.log(pokemonsList);

  return (
    <>
      <div>
        {pokemonsList.map(
          (pokemon) =>
            pokemon.name +
            "-> base experience: " +
            pokemon.base_experience +
            " | | "
        )}
      </div>
    </>
  );
>>>>>>> master
};

export default Home;
