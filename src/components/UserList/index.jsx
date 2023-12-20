import React from 'react'
import User from '../User'

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(el => (
        <User key={el.id} user={el} />
      ))}
    </ul>
  )
}

export default UsersList
