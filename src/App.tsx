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
      <ExpandableText maxCount={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima
        provident alias eos consequuntur! Voluptatibus quod, totam sint nesciunt
        quae odit aut enim explicabo dolorum temporibus ipsum veniam et atque
        porro assumenda fugit amet. Ratione qui vero tempora dolorem recusandae
        officiis impedit, blanditiis aperiam deserunt, quas cum culpa ut harum
        saepe voluptatem dicta fugiat ea! Placeat, qui cum. Nam, ullam numquam
        magni, sequi dignissimos facere soluta ipsam necessitatibus repellendus
        praesentium inventore nostrum vitae quos accusamus unde, illum optio
        perferendis? Inventore vitae illum hic dolor amet, provident quos beatae
        mollitia vel fuga velit repudiandae maxime accusantium voluptates optio
        odit ducimus quaerat!
      </ExpandableText>
      <button onClick={handleClick}>Add count</button>
    </div>
  );
};

export default App;
