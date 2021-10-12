const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

const PriceCard = ({ value, selected, setSelected }) => {
  //   const isSelected = selected.includes(value); // toggle(value, selected)

  const style = {
    backgroundColor: selected === value ? "lightgreen" : "white",
  };
  console.log(selected);
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

export default PriceCard;
