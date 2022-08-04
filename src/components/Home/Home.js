import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import ChoiceBtns from "../ChoiceBtns/ChoiceBtns";
import Button from "../../UI/Button";
import {
  getPokemonImage,
  getPokemonTypes,
  getRandomPokemon,
} from "../../utility/helperFunctions";
import classes from "./Home.module.css";
import NameDisplay from "../EnterName/NameDisplay";

const Home = ({ pokemonsList }) => {
  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

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

  // const obj = pokemonTypes.map((type) => [
  //   type.name,
  //   type.damage_relations.double_damage_from,
  //   type.damage_relations.double_damage_to,
  //   type.damage_relations.half_damage_from,
  //   type.damage_relations.half_damage_to,
  //   type.damage_relations.no_damage_from,
  //   type.damage_relations.no_damage_to,
  // ]);np

  const typeMapping = {};
  pokemonTypes.forEach((type) => {
    typeMapping[type.name] = { ...type.damage_relations };
  });


  return (
    <div className={classes["home_container"]}>
      <div className={classes["home"]}>
        <div className={classes["home_card-container"]}>
          <NameDisplay />
          <div className={classes["cards_wrapper"]}>
            <Card pokemonImage={leftPokemonImage} />
            <p className={classes["vs-text"]}>VS</p>
            <Card pokemonImage={rightPokemonImage} />
          </div>
          <Button
            className={classes["button-catch"]}
            onClick={() => waitForImages()}
          >
            Catch the Pokemons
          </Button>
          <div>
            <ChoiceBtns pokemonTypes={pokemonTypes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
