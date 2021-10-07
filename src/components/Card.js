// const toggle = (x, lst) =>
//   lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

const Card = ({value, selected, setSelected}) => {
  const isSelected = selected.includes(value); // toggle(value, selected)

  const style = {
    backgroundColor: isSelected ? "lightgreen" : "white"
  };
  return (
    <div
      className="platform card m-1 p-2"
      style={style}
      onClick={() => setSelected(value)}
    >
      <div className="card-body">
        <div className="card-title">{value}</div>
      </div>
    </div>
  );
};

export default Card;
