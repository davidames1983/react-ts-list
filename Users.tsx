import * as React from 'react';
import { useAPI } from './usersContext';
import { IUser } from './User';
import { UserCard } from './UserCard';
import Filter from './filter.svg';
import './Users.scss';

export default function Users() {
  const { users } = useAPI();

  return (
    <div className="Users">
      <div className="Users-header">
        <div className="Users-title">Users</div>
        <div className="Users-filterBtn">
          <img src={Filter} />
        </div>
      </div>
      <div className="Users-list">
        {users.map((user: IUser) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
