import React,{useState} from 'react'
import { useAuth } from './AuthenticationProvider'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Register from './Register';

const Login = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isregi,setisregi]=useState("");
    const auth=useAuth()
    const login=()=>{
        auth.login(user)
        navigate(location.state?location.state.path:"/",{replace:true})
    }
    const reg=()=>
    {
      setisregi("true");
      document.getElementById("d1").style.display="none";
    }
  return (
    <div>
      <div id="d1">
      Username:<input value={user} onChange={(e)=>{setUser(e.target.value)}}/> <br></br>
      Email:<input value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
      Password:<input value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
      <br></br>
      <button onClick={login}>Login</button>
      <button onClick={reg}>Don't have an account</button>
      </div>
      {isregi && <Register/>}
      {/* <User details={b}/>  */}
    </div>
  )
}

export default Login
