import React from "react";
import GameCard from "./GameCard";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GameList = ({ games }) => {
  return (
    <div className="game-flexbox">
      <h2>Games</h2>
      {Object.values(games).map((game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default GameList;
