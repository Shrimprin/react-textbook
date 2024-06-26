import React, { useState } from "react";

const values = [
  { id: 1, item: "HTML" },
  { id: 2, item: "CSS" },
  { id: 3, item: "JS" },
];

const SelectItems = values.map((value) => {
  return (
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  );
});

export default function InputSelectBox() {
  const [selectedValue, setSelectedValue] = useState(values[0]["item"]);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        <b>{selectedValue}</b>
      </p>
      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  );
}
