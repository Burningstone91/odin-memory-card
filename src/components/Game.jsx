import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";

const pokemonList = [
  "pikachu",
  "mew",
  "charmander",
  "vaporeon",
  "kadabra",
  "nidoking",
  "butterfree",
  "psyduck",
];

function Game() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    Promise.all(
      pokemonList.map((pokemon) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
          response.json()
        )
      )
    )
      .then((data) => setPokemonData(data))
      .catch((error) => console.error(error));
  }, []);

  function shuffle(array) {
    let shuffledArr = [...array];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  }

  function handleClick() {
    setPokemonData(shuffle(pokemonData));
  }

  return (
    <div className="cards">
      <CardGrid pokemons={pokemonData} onClick={handleClick} />
    </div>
  );
}

export default Game;
