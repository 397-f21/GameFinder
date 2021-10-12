import React from "react";
import GameCard from "./GameCard";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GameList = ({games, selected}) => {
  const filterGames = (listGames) => {
    var items = listGames;
    for (var i = 0; i < selected.length; i++){
    items = items.filter((g) => g.platforms.includes(selected[i]))
    }
    return items;
  }

  return (
    <div className="game-flexbox">
      
      <h2>{ selected=='' ? '' : 'Games'} </h2>

      {Object.values(filterGames(games)).map((game, i) => (
        <GameCard key={i} game={game} />
      ))}
    </div>
  );
};

export default GameList;
