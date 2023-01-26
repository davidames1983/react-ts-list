import * as React from 'react';
import { useAPI } from './usersContext';
import { IUser } from './User';
import { UserCard } from './UserCard';
import './Users.scss';

export default function Users() {
  const { users } = useAPI();

  return (
    <div className="Users">
      {users.map((user: IUser) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
