import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import CustomCounter from "./components/CustomCounter";
import { CounterA } from "./components/CounterA";
import { CounterB } from "./components/CounterB";
import { CounterC } from "./components/CounterC";

function App() {
  return (
    <div className="App">
      <Counter />
      <CustomCounter />
      <CounterA />
      <CounterB />
      <CounterC />
    </div>
  );
}

export default App;
