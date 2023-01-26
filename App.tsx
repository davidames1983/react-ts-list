import * as React from 'react';
import './style.css';
import { UsersContextProvider } from './usersContext';
import Users from './Users';

export default function App() {
  return (
    <UsersContextProvider>
      <div className="App">
        <h1>Users</h1>
        <Users />
      </div>
    </UsersContextProvider>
  );
}
