const toggle = (x, sel) => (x === sel ? undefined : x);

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
      onClick={() => setSelected(toggle(value, selected))}
    >
      <div className="card-body">
        <div className="card-title">{"Below $" + value}</div>
      </div>
    </div>
  );
};

export default PriceCard;
