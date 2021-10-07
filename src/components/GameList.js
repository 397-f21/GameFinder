import React from "react";
import GameCard from "./GameCard";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GameList = ({games, selected}) => {
  // const filterGames = (listGames) => {
  //   games.filter((g) => g.platforms.includes())
  // }
  const gameFilter = games.filter(i => i.platforms.includes(selected));

  return (
    <div className="game-flexbox">
      
      <h2>{ selected=='' ? '' : 'Games'} </h2>

      {Object.values(gameFilter).map((game, i) => (
        <GameCard key={i} game={game} />
      ))}
    </div>
  );
};

export default GameList;
