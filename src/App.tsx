import { useState } from 'react';

import Button from './components/Button';
import './App.css';
import Alert from './components/Alert';

const App = () => {
  const items = ['New york', 'San Franciso', 'Tokyo', 'London'];
  const [clicked, setClicked] = useState(false);

  return (
    <div className='App'>
      <Button color='primary' onClick={() => setClicked(!clicked)}>
        My Button
      </Button>
    </div>
  );
};

export default App;
