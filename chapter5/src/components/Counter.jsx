import React, { useState } from "react";

export default function Counter({
  count,
  countIncrement,
  countDecrement,
  countReset,
  initialCount,
}) {
  return (
    <>
      <p>
        Now count is ... : <b>{count}</b>
        <br />
        initial count is ... : <b>{initialCount}</b>
      </p>

      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button>
    </>
  );
}
