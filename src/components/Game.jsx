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
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);

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

  function handleClick(name) {
    if (selected.includes(name)) {
      setSelected([]);
      setScore(0);
      console.log("Game over, already clicked!");
      return;
    }

    setScore(score + 1);
    setSelected([...selected, name]);
    setPokemonData(shuffle(pokemonData));
  }

  return (
    <div className="cards">
      <CardGrid pokemons={pokemonData} onClick={handleClick} />
    </div>
  );
}

export default Game;
