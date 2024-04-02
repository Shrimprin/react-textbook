import React, { useState } from "react";

const values = [
  { id: 1, item: "Mouse" },
  { id: 2, item: "Monitor" },
  { id: 3, item: "Keyboard" },
];

const CheckBtnItem = ({ onChange, checked }) =>
  values.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          onChange={onChange}
          checked={checked.includes(value.item)}
        ></input>
        {value.item}
      </label>
    );
  });

export default function InputCheckBox() {
  const [checkedValues, setCheckdValues] = useState([]);
  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckdValues(
        checkedValues.filter((checkedValue) => checkedValue !== e.target.value)
      );
    } else {
      setCheckdValues([...checkedValues, e.target.value]);
    }
  };

  return (
    <div className="App">
      <p>
        Now selected... : <b>{checkedValues}</b>
      </p>
      <CheckBtnItem onChange={handleChange} checked={checkedValues} />
    </div>
  );
}
