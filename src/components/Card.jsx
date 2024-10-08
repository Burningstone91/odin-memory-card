import PropTypes from "prop-types";

function Card({ name, imgsrc, onClick }) {
  return (
    <div className="card" onClick={onClick}>
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
  onClick: PropTypes.func,
};

export default Card;
