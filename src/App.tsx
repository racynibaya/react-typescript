import { useState } from 'react';

import Button from './components/Button';
import './App.css';
import Alert from './components/Alert';
import Like from './components/Like';

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });
  console.log(cart.items[0].quantity);
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map(item =>
        item.id === 1 ? { ...item, quantity: (item.quantity += 1) } : item
      ),
    });
  };

  return (
    <div className='App'>
      {/* <p>{pizza.name}</p>
      <p>Ingredients: {...pizza.toppings}</p> */}
      {cart.items.map((item, i) => (
        <p key={item.id}>{item.quantity}</p>
      ))}

      <button onClick={handleClick}>Add count</button>
    </div>
  );
};

export default App;
