import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Card({ name }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
  }, [name]);

  return (
    <div className="card">
      <img
        className="poke-image"
        src={pokemon?.sprites.front_default}
        alt={"Pokemon " + name}
      ></img>
      <p className="poke-name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
