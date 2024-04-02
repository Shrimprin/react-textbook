import { useState } from "react";

const CounterText = (props) => (
  <p>
    {props.name}'s is {props.count}
  </p>
);

export default function Counter(props) {
  const INITIAL_COUNT = 0;
  const [count, setCount] = useState(INITIAL_COUNT);

  const countAdd = () => setCount((prevCount) => prevCount + 1);
  const countSub = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <div>
      <button onClick={countAdd}>Button + 1</button>
      <button onClick={countSub}>Button - 1</button>
      <button onClick={countReset}>Reset</button>
      <CounterText name={props.name} count={count} />
    </div>
  );
}
