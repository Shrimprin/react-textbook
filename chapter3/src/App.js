import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const CounterText = (props) => <p> now count is {props.count}</p>;
const Counter = () => {
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
      <CounterText count={count} />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
