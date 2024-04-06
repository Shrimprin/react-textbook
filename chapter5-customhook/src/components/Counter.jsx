import React, { useState } from "react";

const CounterText = (props) => <p>now count is ... : {props.count}</p>;
const INITIAL_COUNT = 0;

export default function Counter() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const countAdd = () => setCount((prevCount) => prevCount + 1);
  const countSub = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <div className="counterCounter">
      <CounterText count={count} />
      <button onClick={countAdd}>+1</button>
      <button onClick={countSub}>-1</button>
      <button onClick={countReset}>reset</button>
    </div>
  );
}
