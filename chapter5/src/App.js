import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Counter from "./components/Counter";
import Hello from "./components/Hello";

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
    </>
  );
}

export default App;
