import React,{useContext,useState} from 'react'
const Authcontext=React.createContext()
export const AuthenticationProvider = (props) => {
    const [user,setUser]=useState(null)
    const login=(user)=>
    {
        setUser(user)
    }
    const logout=()=>
    {
        setUser(null)
    }
  return (
    <Authcontext.Provider value={{user,login,logout}}>{props.children}</Authcontext.Provider>
  )
}
export const useAuth=()=>{
    return useContext(Authcontext)
}
