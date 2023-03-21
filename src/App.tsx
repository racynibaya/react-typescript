import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

// Simulating connection
const connect = () => console.log('Connected');
const disconnect = () => console.log('Disconnected');

const App = () => {
  useEffect(() => {
    connect();

    // Effect clean up: It should stop or undo whatever the effect was doing.
    return () => disconnect();
  });
  return <div></div>;
};

export default App;
