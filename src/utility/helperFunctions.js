import axios from "axios";

export const getRandomPokemon = (pokemonsList) => {
  const randomNr = Math.floor(Math.random() * 150);
  const randomPokemon = pokemonsList[randomNr];
  return randomPokemon;
};

export const getPokemonImage = (pokemon) => {
  const image =
    pokemon &&
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  return image;
};

export const getPokemonsData = async (setPokemonsList) => {
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
      const individualPokemon = await axios.get(pokemon.url).catch((error) => {
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
