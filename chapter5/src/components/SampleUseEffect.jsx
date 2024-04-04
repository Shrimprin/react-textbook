import React, { useState, useEffect } from "react";

const INITIAL_COUNT = 0;

export default function SampleUseEffect() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const callbackFunction = () => {
    document.title = `${count} times clicked!`;
  };
  useEffect(callbackFunction, [count]);

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  return (
    <div className="App">
      <p>now count is... : {count}</p>
      <button onClick={countIncrement}> + 1</button>
      <button onClick={countReset}>Reset</button>
    </div>
  );
}
