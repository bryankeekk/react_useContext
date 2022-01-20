import logo from './logo.svg';
import './App.css';

import React, { useContext } from 'react';
import { AppContext } from './context';

function App() {

  const { counter, increment, decrement, isLogged, logHandler } = useContext(AppContext);

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={() => increment(5)}>+</button>
      <button onClick={() => decrement(5)}>-</button>

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
      <button onClick={logHandler}>Login</button>
    </div>
  );
}

export default App;
