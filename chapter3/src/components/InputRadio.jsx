import React, { useState } from "react";
const values = [
  { id: 1, item: "red" },
  { id: 2, item: "blue" },
  { id: 3, item: "yellow" },
];

const RadioBtnItems = ({ onChange, checked }) =>
  values.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="radio"
          value={value.item}
          onChange={onChange}
          checked={checked === value.item}
        ></input>
        {value.item}
      </label>
    );
  });

export default function InputRadio() {
  const [checkedValue, setCheckedValue] = useState(values[0]["item"]);
  const handleChange = (e) => setCheckedValue(e.target.value);
  return (
    <div className="App">
      <p>
        Now selected... : <b>{checkedValue}</b>
      </p>
      <RadioBtnItems onChange={handleChange} checked={checkedValue} />
    </div>
  );
}
