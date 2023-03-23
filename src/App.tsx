import { useEffect, useState } from 'react';
import axios, { AxiosError, CanceledError } from 'axios';

// Simulating connection
const connect = () => console.log('Connected');
const disconnect = () => console.log('Disconnected');

// for better development
interface User {
  id: number;
  name: string;
  address: object;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Allows us to cancel or abort async operation like fetch request, dom manipulation, any operation that may take time to complete.
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const { data } = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal }
        );
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      }
    };

    return controller.abort();

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hotdog</h1>
    </div>
  );
};

export default App;
