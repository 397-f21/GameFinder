// import React, {useState} from "react";
import React from "react";
import TagCard from "./TagCard.js";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tags = [
  "Free to Play",
  "Action",
  "Multiplayer",
  "Adventure",
  "Simulation",
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
      <h6 className="subtitle">Select all that apply</h6>
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
