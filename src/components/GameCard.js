// const toggle = (x, lst) =>
//   lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

const GameCard = ({game}) => {
  return (
    <div className="game-card">
      <div className="game-card-body">
        <img className="card-img-top" src={game.image} alt={game.title} />
        <div className="card-title">{game.title} </div>
      </div>
    </div>
  );
};

export default GameCard;
