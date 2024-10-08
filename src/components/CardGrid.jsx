import Card from "./Card";
import PropTypes from "prop-types";

function CardGrid({ pokemons, onClick }) {
  return (
    <div className="cards">
      {pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            imgsrc={pokemon?.sprites.front_default}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

CardGrid.propTypes = {
  pokemons: PropTypes.array,
  onClick: PropTypes.func,
};

export default CardGrid;
