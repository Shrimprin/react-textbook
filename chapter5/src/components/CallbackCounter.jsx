import React, { useState, useCallback } from "react";

const Button = React.memo(({ counterState, buttonValue }) => {
  console.log(`${buttonValue} is clicked!`);
  return <button onClick={counterState}>{buttonValue}</button>;
});

export default function CallbackCounter() {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const countIncrementA = useCallback(
    () => setCountStateA(countStateA + 1),
    [countStateA]
  );

  const countIncrementB = useCallback(
    () => setCountStateB(countStateB + 1),
    [countStateB]
  );

  return (
    <>
      <p>A Button {countStateA}</p>
      <p>B Button {countStateB}</p>
      <Button counterState={countIncrementA} buttonValue="A Button" />
      <Button counterState={countIncrementB} buttonValue="B Button" />
    </>
  );
}
