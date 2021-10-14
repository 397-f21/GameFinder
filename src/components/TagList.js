// import React, {useState} from "react";
import React from "react";
import TagCard from "./TagCard.js";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tags = [
  "Action",
  "Multiplayer",
  "Adventure",
  "Simulation",
  "Free to Play",
  "Open World",
  "Third Person",
  "Strategy",
  "Racing",
  "Casual"
];
const TagList = ({tagSelected, setTagSelected}) => {
  return (
    <div className="platform-flexbox">
      <h2>Tags</h2>
      {Object.values(tags).map((value, i) => (
        <TagCard
          key={i}
          value={value}
          selected={tagSelected}
          setSelected={setTagSelected}
        />
      ))}
    </div>
  );
};

export default TagList;
