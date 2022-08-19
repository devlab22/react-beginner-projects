import './index.scss';
import React from 'react';

function App() {

  const [counter, setCounter] = React.useState(0);

  const handleOnPlus = () => {
    setCounter(counter + 1)
  }


  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button className="minus" onClick={() => setCounter(counter - 1)}>- Минус</button>
        <button className="plus" onClick={handleOnPlus} >Плюс +</button>
      </div>
    </div>
  );
}

export default App;
