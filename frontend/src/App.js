import React, { useState } from 'react';
import Header from './Header';

function App() { 
  let [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1); // tem diferenca no estado counter++ para counter+1
    console.log(counter);
  }

  return (
    <div>
    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
