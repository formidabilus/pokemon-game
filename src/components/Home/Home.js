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

  const typeMapping = {};
  pokemonTypes.forEach((type) => {
    typeMapping[type.name] = { ...type.damage_relations };
  });

  function calculateDamageTo(pokemonTypeOne, pokemonTypeTwo) {
    let scoreDamageTo = 0;

    Object.keys(typeMapping).forEach((type) => {
      if (type === pokemonTypeOne) {
        const doubleDamageTo = typeMapping[type].double_damage_to;
        doubleDamageTo.forEach((type) => {
          const { name } = type;
          if (name === pokemonTypeTwo) {
            scoreDamageTo = scoreDamageTo + 2;
          } else return;
        });
        const halfDamageTo = typeMapping[type].half_damage_to;
        halfDamageTo.forEach((type) => {
          const { name } = type;
          if (name === pokemonTypeTwo) {
            scoreDamageTo = scoreDamageTo + 0.5;
          } else return;
        });

        const noDamageTo = typeMapping[type].no_damage_to;
        noDamageTo.forEach((type) => {
          const { name } = type;
          if (name === pokemonTypeTwo) {
            return scoreDamageTo;
          } else return;
        });
      }
    });
    return scoreDamageTo;
  }

  function calculateDamageFrom(pokemonTypeOne, pokemonTypeTwo) {
    let scoreDamageFrom = 0;
    Object.keys(typeMapping).forEach((type) => {
      if (type === pokemonTypeOne) {
        const doubleDamageFrom = typeMapping[type].double_damage_from;
        doubleDamageFrom.forEach((type) => {
          const { name } = type;
          if (name === pokemonTypeTwo) {
            scoreDamageFrom = scoreDamageFrom - 2;
          } else return;
        });
        const halfDamageFrom = typeMapping[type].half_damage_from;
        halfDamageFrom.forEach((type) => {
          const { name } = type;
          if (name === pokemonTypeTwo) {
            scoreDamageFrom = scoreDamageFrom - 0.5;
          } else return;
        });

        const noDamageFrom = typeMapping[type].no_damage_from;
        noDamageFrom.forEach((type) => {
          const { name } = type;
          if (name === pokemonTypeTwo) {
            return scoreDamageFrom;
          } else return;
        });
      }
    });
    return scoreDamageFrom;
  }

  console.log(calculateDamageFrom("ground", "water"));
  console.log(calculateDamageTo("ground", "bug"));

  return (
    <div className={classes["home_container"]}>
      <div className={classes["home"]}>
        <div className={classes["home_card-container"]}>
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
