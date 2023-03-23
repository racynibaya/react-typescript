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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Allows us to cancel or abort async operation like fetch request, dom manipulation, any operation that may take time to complete.
    const controller = new AbortController();
    setIsLoading(true);
    console.log('loading');

    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then(res => {
        console.log(res);

        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);

        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
        console.log('error');
      });

    // return controller.abort();
  }, []);

  console.log(isLoading);

  return (
    <div>
      {isLoading && <div className='spinner-border'></div>}
      <h1>Hotdog</h1>
    </div>
  );
};

export default App;
