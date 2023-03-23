import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from './services/api-client';
import userService, { User } from './services/user-service';
// Simulating connection
const connect = () => console.log('Connected');
const disconnect = () => console.log('Disconnected');

// for better development

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log('loading');

    const { request, cancel } = userService.getAllUsers();

    request
      .then(res => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);

        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return cancel;
  }, []);

  console.log(isLoading);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));

    userService.deleteUser(user.id).catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = (user: User) => {
    const newUser = { id: 0, name: 'Racyn', address: { town: 'San Agustin' } };
    const originalUsers = [...users];

    setUsers([...users, newUser]);

    userService
      .addUser(newUser)
      .then(({ data: saveUser }) => setUsers([saveUser, ...users]))
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const newUser = { ...user, name: user.name + '!' };
    setUsers(users.map(u => (u.id === newUser.id ? newUser : u)));

    userService.updateUser(newUser).catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {isLoading && <div className='spinner-border'></div>}
      <h1>Hotdog</h1>
    </div>
  );
};

export default App;
