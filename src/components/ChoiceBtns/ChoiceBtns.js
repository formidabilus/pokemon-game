import React, { useState } from "react";
import Button from "../../UI/Button";
import axios from "axios";

const ChoiceBtns = () => {
  const [pokemonTypes, setPokemonTypes] = useState();
  const getPokemonsTypes = async () => {
    const pokemonApiTypes = "https://pokeapi.co/api/v2/type/";
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
