import { useState } from "react";
const SelectableDiv = () => {
  // Sample data representing divs
  const initialData = [
    { id: 1, text: "Div 1", selected: false },
    { id: 2, text: "Div 2", selected: false },
    { id: 3, text: "Div 3", selected: false },
  ];

  const [data, setData] = useState(initialData);

  const handleDivClick = (id) => {
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        selected: item.id === id ? !item.selected : item.selected,
      }))
    );
  };

  const handleDelete = () => {
    setData((prevData) => prevData.filter((item) => !item.selected));
  };

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleDivClick(item.id)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            margin: "5px",
            background: item.selected ? "#f0f0f0" : "transparent",
          }}
        >
          {item.text}
        </div>
      ))}
      <button onClick={handleDelete}>Delete Selected</button>
    </div>
  );
};

export default SelectableDiv;
