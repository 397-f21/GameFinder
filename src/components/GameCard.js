const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

const GameCard = ({ game }) => {
  return (
    <div className="platform card m-1 p-2">
      <div className="card-body">
        <div className="card-title">{game.title}</div>
        <img src={game.image} />
      </div>
    </div>
  );
};

export default GameCard;
