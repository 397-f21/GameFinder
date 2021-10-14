import "../App.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card-flex">
      <div className="game-card-body" onClick={() => window.open(game.url)}>
        <img className="game-card-img" src={game.image} alt={game.title} />
        <div className="game-card-title">{game.title} </div>
      </div>
    </div>
  );
};

export default GameCard;
