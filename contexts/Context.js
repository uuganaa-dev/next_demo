import React, { useContext, useReducer } from "react";
import Reducer from "../reducers/Reducer";

const Context = React.createContext();

const initialState = {
  list: [],
};

export const useState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useState must be used within a ContextProvider");
  }
  return context;
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default React.memo(ContextProvider);
