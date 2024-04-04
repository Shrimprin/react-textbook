import React, { useState } from "react";

// メモ化しているおかげで、渡されたpropsが更新んされていないならレンダリングされない
const CountResult = React.memo(({ text, countState }) => {
  console.log(`${text} button is clicked!`);
  return (
    <p>
      {text}: {countState}
    </p>
  );
});

export default function Counter() {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);
  const countIncrementA = () =>
    setCountStateA((prevCountStateA) => prevCountStateA + 1);

  const countIncrementB = () =>
    setCountStateB((prevCountStateB) => prevCountStateB + 1);

  return (
    <>
      <CountResult text="A Button" countState={countStateA} />
      <CountResult text="B Button" countState={countStateB} />
      <button onClick={countIncrementA}>A Button</button>
      <button onClick={countIncrementB}>B Button</button>
    </>
  );
}
