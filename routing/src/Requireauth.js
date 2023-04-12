import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from './AuthenticationProvider'
import { Navigate } from 'react-router-dom'
const Requireauthen = (props) => {
    const location=useLocation()
    const auth=useAuth()
    if(!auth.user)
    {
        return <Navigate to="/login" state={{path:location.pathname}}/>
    }
  return (
   props.children
  )
}

export default Requireauthen
