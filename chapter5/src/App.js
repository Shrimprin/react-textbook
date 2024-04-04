import "./App.css";

import React, { useState } from "react";
import Counter from "./components/Counter";
import Hello from "./components/Hello";

import SampleUseEffect from "./components/SampleUseEffect";
import MyTimer from "./components/Timer";
import CountResult from "./components/CountResult";
import CallbackCounter from "./components/CallbackCounter";

const INITIAL_COUNT = 0;
const INITIAL_NAME = "JS";

function App() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);
  const countIncrement = () => setCount((prevCount) => prevCount + 1);
  const countDecrement = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Counter
        count={count}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        countReset={countReset}
        initialCount={INITIAL_COUNT}
      />

      <Hello
        name={name}
        handleChangeName={handleChangeName}
        initialName={INITIAL_NAME}
      />

      <SampleUseEffect />
      <MyTimer />
      <CountResult />
      <CallbackCounter />
    </>
  );
}

export default App;
