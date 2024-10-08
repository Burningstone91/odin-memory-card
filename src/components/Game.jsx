import { useEffect, useState } from "react";
import Card from "./Card";

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
  const [highscore, setHighscore] = useState(0);

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
    if (!selected.includes(name) && score === 7) {
      alert("You won!");
      setHighscore(score + 1);
      reset();
      return;
    }

    if (selected.includes(name)) {
      if (score > highscore) setHighscore(score);
      alert("Gameover");
      reset();
      return;
    }

    setScore(score + 1);
    setSelected([...selected, name]);
    setPokemonData(shuffle(pokemonData));
  }

  function reset() {
    setScore(0);
    setSelected([]);
    setPokemonData(shuffle(pokemonData));
    return;
  }

  return (
    <div className="game">
      <div className="scores">
        <p className="current-score">{`Current Score: ${score}`}</p>
        <p className="high-score">{`High Score: ${highscore}`}</p>
      </div>
      <div className="cards">
        {pokemonData.map((pokemon) => {
          return (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              imgsrc={pokemon?.sprites.front_default}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
