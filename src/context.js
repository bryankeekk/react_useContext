import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  const increment = (y) => {
    setCounter(x => x + y);
  };
  const decrement = (y) => {
    setCounter(x => x - y);
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
