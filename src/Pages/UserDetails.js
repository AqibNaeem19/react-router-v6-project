import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;

  return (
    <div>
      <p>Details about User {userId}</p>
    </div>
  )
}

export default UserDetails