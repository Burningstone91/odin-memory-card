import PropTypes from "prop-types";

function Card({ name, imgsrc }) {
  return (
    <div className="card">
      <img className="poke-image" src={imgsrc} alt={"Pokemon " + name}></img>
      <p className="poke-name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  imgsrc: PropTypes.string,
};

export default Card;
