import React from 'react';

interface IUser {
  name: string,
  email: string,
}

interface Props {
  user: IUser,
}

// tipagem para component: Function Component
const User: React.FC<Props> = ({ user })=>{
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br/>
      <strong>Email: </strong> {user.email} <br/>
    </div>
  )
}

export default User;

