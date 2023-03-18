import { useState } from 'react';

import Button from './components/Button';
import './App.css';
import Alert from './components/Alert';
import Like from './components/Like';
import ExpandableText from './components/ExpandableText';

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
      <ExpandableText maxCount={30} />
      <button onClick={handleClick}>Add count</button>
    </div>
  );
};

export default App;
