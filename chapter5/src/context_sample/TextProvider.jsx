import React, { createContext } from "react";

export const TextContext = createContext();

const text = "this is text given from Provider ";

export const TextProvider = ({ children }) => {
  return <TextContext.Provider value={text}>{children}</TextContext.Provider>;
};
