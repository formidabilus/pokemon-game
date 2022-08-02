import React, { useState, useEffect } from "react";
import Button from "../../UI/Button";
import classes from "./ChoiceBtns.module.css";

const ChoiceBtns = () => {
  const [pokemonType, setPokemonType] = useState([]);

  const getPokemonType = () => {
    const fetchPokemonData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/type/");
      const response = await data.json();
      const result = response.results;
      const sandra = await Promise.all(
        result.map(async (types) => {
          const typeData = await fetch(types.url);
          const typeRes = await typeData.json();
          return typeRes;
        })
      );
      console.log(sandra);
    };
    setPokemonType(fetchPokemonData);
  };

  useEffect(() => {
    getPokemonType();
  }, []);

  return (
    <div className={classes["choice_button-container"]}>
      <p className={classes["choice_text"]}>Please select choice:</p>
      <Button className={classes["choice_buttons"]}>Win</Button>
      <Button className={classes["choice_buttons"]}>Draw</Button>
      <Button className={classes["choice_buttons"]}>Lose</Button>
    </div>
  );
};

export default ChoiceBtns;
