export const getRandomPokemon = (pokemonsList) => {
  const randomNr = Math.floor(Math.random() * 150);
  const randomPokemon = pokemonsList[randomNr];
  console.log(randomPokemon);
  return randomPokemon;
};

export const getPokemonImage = (pokemon) => {
  const image =
    pokemon &&
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  console.log(image);

  return image;
};
