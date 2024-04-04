import React, { useState, useEffect } from "react";

const INITIAL_COUNT = 0;

export default function MyTimer() {
  const [display, toggleDisplay] = useState(false);
  const handleToggleDisplay = () => {
    toggleDisplay(!display);
  };

  return (
    <>
      <button onClick={handleToggleDisplay}>
        {display ? "Hide Timer" : "Show Timer"}
      </button>
      {display && <Timer></Timer>}
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(INITIAL_COUNT);

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("count up + 1");
  };

  const callbackFunction = () => {
    alert("executed");
    const timer = setInterval(countIncrement, 1000);
    return () => {
      console.log("timer is deleted");
      clearInterval(timer);
    };
  };

  useEffect(callbackFunction, []);

  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  return (
    <div className="App">
      <p>now count is... : {count}</p>
      <button onClick={countReset}>Reset</button>
    </div>
  );
}
