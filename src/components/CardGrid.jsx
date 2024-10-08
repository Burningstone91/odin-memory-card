import { useEffect, useState } from "react";
import Card from "./Card";

const pokemonList = ["pikachu", "mew", "charmander"];

function CardGrid() {
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

  return (
    <div className="cards">
      {pokemonData.map((pokemon) => {
        return (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            imgsrc={pokemon?.sprites.front_default}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
