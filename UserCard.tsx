import * as React from 'react';
import { IUser } from './User';
import './UserCard.scss';

export const UserCard = React.memo((user: IUser) => {
  return (
    <div className="UserCard">
      {user.firstName} {user.lastName}
    </div>
  );
});
