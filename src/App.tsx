import { useState } from 'react';

import Button from './components/Button';
import './App.css';
import Alert from './components/Alert';
import Like from './components/Like';

const App = () => {
  const items = ['New york', 'San Franciso', 'Tokyo', 'London'];
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  return (
    <div className='App'>
      <Like isClicked={clicked} onHandleClick={() => setClicked(!clicked)} />
    </div>
  );
};

export default App;
