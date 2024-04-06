import React, { useRef } from "react";

export default function UseRefSample() {
  const inputRefObject = useRef(null);
  const handleClick = () => {
    inputRefObject.current.focus();
  };

  return (
    <div className="App">
      <input ref={inputRefObject} type="text" />
      <button onClick={handleClick}>focus input area</button>
    </div>
  );
}
