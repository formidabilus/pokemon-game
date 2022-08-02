import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Home from "./components/Home/Home";
import { getPokemonsData } from "./utility/helperFunctions";
import "./App.css";

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  useEffect(() => {
    getPokemonsData(setPokemonsList);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          exact
          path="/start"
          element={<Home pokemonsList={pokemonsList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
