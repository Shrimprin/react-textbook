import React, { useContext } from "react";
import { CountContext } from "./CountProvider";

export const Third = () => {
  const [count, setCount] = useContext(CountContext);
  console.log(`now ... : ${count}`);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <p>
        Third component: <b>now... {count}</b>
      </p>
      <button onClick={handleClick}>+1 button</button>
    </>
  );
};
