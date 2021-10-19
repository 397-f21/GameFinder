const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

const Card = ({ value, selected, setSelected }) => {
  const isSelected = selected.includes(value); // toggle(value, selected)

  const style = {
    backgroundColor: isSelected ? "lightgreen" : "white",
  };

  const platDict = {
    "win": "Windows",
    "mac": "Mac OS",
    "linux": "Linux"
  }

  return (
    <div
      className="platform card m-1 p-2"
      style={style}
      onClick={() => setSelected(toggle(value, selected))}
    >
      <div className="card-body">
        <div className="card-title">{platDict[value]}</div>
      </div>
    </div>
  );
};

export default Card;
