const GameCard = ({ game }) => {
  return (
    <div className="game-card"> 
      <div className="game-card-body" onClick={() => window.open("https://store.steampowered.com/")}>
        <img className="card-img-top" src={game.image} alt={game.title} />
        <div className="card-title">{game.title} </div>
      </div>
    </div>
  );
};

export default GameCard;
