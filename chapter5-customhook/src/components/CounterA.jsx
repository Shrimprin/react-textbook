import { useCounter } from "./hooks";
import { CounterText } from "./CounterText";

export const CounterA = () => {
  const { count, countAdd, countSub, countReset } = useCounter(0);
  return (
    <div className="counterCounter">
      <h1>CounterA</h1>
      <CounterText count={count} />
      <button onClick={countAdd}>+1</button>
      <button onClick={countSub}>-1</button>
      <button onClick={countReset}>reset</button>
    </div>
  );
};
