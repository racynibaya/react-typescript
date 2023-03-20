import { useState } from 'react';

import {
  Alert,
  Button,
  Card,
  CardList,
  ExpandableText,
  Form,
  Like,
  ListGroup,
  Message,
  User,
} from './components';

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
      <Alert>
        reaadf <span>asdfasdf</span>
      </Alert>
      <Form />
    </div>
  );
};

export default App;
