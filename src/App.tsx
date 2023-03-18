import { useState } from 'react';

import Button from './components/Button';
import './App.css';
import Alert from './components/Alert';
import Like from './components/Like';

const App = () => {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, 'Makdo'],
    });
  };

  console.log(pizza);

  return (
    <div className='App'>
      <p>{pizza.name}</p>
      <p>Ingredients: {...pizza.toppings}</p>
      <button onClick={handleClick}>Add toppings</button>
    </div>
  );
};

export default App;
