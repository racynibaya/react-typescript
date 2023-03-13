import ListGroup from './components/ListGroup';
import './App.css';

function App() {
  const items = ['New york', 'San Franciso', 'Tokyo', 'London'];

  return (
    <div className='App'>
      <ListGroup items={items} heading='Cities' />
    </div>
  );
}

export default App;
