import React from 'react'
import {useAuth} from './AuthenticationProvider'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
   const navigate=useNavigate()
   const auth=useAuth()
   const logout=()=>
   {
       auth.logout()
       navigate("/")
   }
  return (
    <div>
      Welcome : {auth.user} <br></br>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
