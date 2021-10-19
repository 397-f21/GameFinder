import React from "react";
import GameCard from "./GameCard";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GameList = ({ games, selected, priceSelected, tagSelected }) => {
  const filterGames = (listGames) => {
    var items = listGames;
    for (let i = 0; i < selected.length; i++) {
      items = items.filter((g) => g.platforms.includes(selected[i]));

    }
    if (priceSelected) {
      items = items.filter((g) => g.price <= priceSelected);
    }
    var items2 = []; 
    if (tagSelected.length > 0) {
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < tagSelected.length; j++){
         if(items[i].tags.includes (tagSelected[j]))
         {
         items2.push (items[i]);
         break;
         }

        }
       
      }
     
    }
  
    else{
        return items;
    }
    
    return items2;
  };

  const filterGamesList = filterGames(games)
  
  return (
    <div className="game-list">
      <h2>{filterGamesList.length === 0 ? "No Games found" : "Games"} </h2>
      <div className="grid">
        {Object.values(filterGames(games)).map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
