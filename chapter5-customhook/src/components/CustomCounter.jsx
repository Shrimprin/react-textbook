import React, { useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const countAdd = () => setCount((prevCount) => prevCount + 1);
  const countSub = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(initialCount);
  return { count, countAdd, countSub, countReset };
};

const CounterText = ({ count }) => <p>now count is ... {count}</p>;

export default function Counter() {
  const { count, countAdd, countSub, countReset } = useCounter(0);
  return (
    <div className="counterCounter">
      <CounterText count={count} />
      <button onClick={countAdd}>+1</button>
      <button onClick={countSub}>-1</button>
      <button onClick={countReset}>reset</button>
    </div>
  );
}
