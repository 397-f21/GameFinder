import React from "react";
import GameCard from "./GameCard";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GameList = ({ games, selected }) => {

  // const filterGames = (listGames) => {
  //   games.filter((g) => g.platforms.includes())
  // }
  const filter = games.filter((i) => i.platforms.includes(selected));

  return (
    <div className="game-flexbox">
      <h2>Games</h2>
      {Object.values(filter).map((game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default GameList;
