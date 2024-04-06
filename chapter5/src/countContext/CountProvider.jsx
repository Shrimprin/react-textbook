import React, { useState, createContext } from "react";

export const CountContext = createContext();
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={[count, setCount]}>
      <p> this is parent ... : {count}</p>
      {children}
    </CountContext.Provider>
  );
};
