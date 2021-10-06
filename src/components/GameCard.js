const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <div className="game-card-body">
        <img className="game-card-image" src={game.image} />
        <div className="game-card-title">{game.title}</div>
      </div>
    </div>
  );
};

export default GameCard;
