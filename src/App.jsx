import React, { useState } from 'react';
import './App.css';
import UserCard from './UserCard';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
  ]);

  const addUser = () => {
    setUsers([...users, { id: users.length + 1, name: 'New User', age: 22 }]);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <button onClick={addUser}>Add User</button>
      <UserList users={users} />
    </div>
  );
}

export default App;
