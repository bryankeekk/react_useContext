import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  const increment = (b) => {
    setCounter(a => a + b);
  };
  const decrement = (y) => {
    setCounter(a => a - b);
  };

  const logHandler = () => {
      setIsLogged(!isLogged);
  };

  return (
    <AppContext.Provider
      value={{
        counter,
        increment,
        decrement,
        isLogged,
        logHandler
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
