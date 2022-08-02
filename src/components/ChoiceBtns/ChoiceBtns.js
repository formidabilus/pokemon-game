import React, { useState } from "react";
import Button from "../../UI/Button";
import axios from "axios";

const ChoiceBtns = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const getPokemonsTypes = async () => {
    const pokemonApiTypes = "https://pokeapi.co/api/v2/type/";
    const response = await axios.getPokemonsTypes(pokemonApiTypes);
    const pokemonResult = response.data.results;
    console.log(pokemonResult);
  };
  return (
    <div>
      <Button>Win</Button>
      <Button>Draw</Button>
      <Button>Lose</Button>
    </div>
  );
};

export default ChoiceBtns;
