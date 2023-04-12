import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetails = () => {
    const {userid}=useParams()
  return (
    <div>
        Details of the  {userid}
    </div>
  )
}

export default UserDetails
