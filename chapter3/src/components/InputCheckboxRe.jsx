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
          checked={checked[value.item]}
        ></input>
        {value.item}
      </label>
    );
  });

export default function InputCheckBoxRe() {
  const [checkedValues, setCheckdValues] = useState(
    // 第１引数は関数、第２引数は初期値
    // 初期値が第１引数の関数の第１引数(acc)に入る。たぶん
    values.reduce((acc, cur) => {
      acc[cur.item] = false;
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    setCheckdValues({ ...checkedValues, [e.target.value]: e.target.checked });
  };

  const stateOfCheckedValues = Object.entries(checkedValues).reduce(
    (pre, [key, value]) => {
      value && pre.push(key);
      return pre;
    },
    []
  );

  return (
    <div className="App">
      <p>
        Now selected... : <b>{stateOfCheckedValues.join(",")}</b>
      </p>
      <CheckBtnItem onChange={handleChange} checked={checkedValues} />
    </div>
  );
}
