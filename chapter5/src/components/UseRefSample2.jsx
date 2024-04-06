import React, { useState, useEffect, useRef } from "react";

export default function UseRefSample2() {
  const inputRefObject = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("render");
  });

  const handleClick = () => {
    setText(inputRefObject.current.value);
  };

  const textReset = () => {
    setText("");
    inputRefObject.current.value = "";
  };

  return (
    <>
      <input ref={inputRefObject} type="text" />
      <button onClick={handleClick}>set text</button>
      <button onClick={textReset}>reset</button>
      <p>text: {text}</p>
    </>
  );
}
