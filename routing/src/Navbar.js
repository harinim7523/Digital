import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { useAuth } from './AuthenticationProvider'
const Navbar = () => {
    const auth=useAuth()
    const instyle=({isActive})=>
    {
        return({
            fontSize:isActive?"30px":"20px",
            color:isActive?"red":"blue",
            padding:isActive?"2%":"2%"

   })
    }
  return (
    <div>
      <nav>
        <NavLink style={instyle} to="/">Home</NavLink>
        <NavLink style={instyle} to="about">About</NavLink>
        <NavLink style={instyle} to="products">Influencer</NavLink>
        <NavLink style={instyle} to="users">User</NavLink>
        <NavLink style={instyle} to="profile">Profile</NavLink>
        {!auth.user && 
            <NavLink style={instyle} to="login">Login</NavLink>}
      </nav>
    </div>
  )
}

export default Navbar

