import React, { useContext, useState, useEffect, createContext } from 'react';

import { IUser } from './User';

const UsersContext = createContext(null);

const condenseUserData = (data): [IUser] => {
  return data.map((user) => ({
    id: user?.login?.uuid,
    firstName: user?.name?.first,
    lastName: user?.name?.last,
    city: user?.location?.city,
    state: user?.location?.state,
    email: user?.email,
    phone: user?.cell,
    pictureURL: user?.picture?.medium,
  }));
};

export function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`https://randomuser.me/api/?results=50`);
      const data = await response.json();
      const users = condenseUserData(data?.results);
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
