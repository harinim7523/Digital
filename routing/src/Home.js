import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate=useNavigate()
  return (
    <div>
      Hello home page
      <button onClick={()=>navigate("order")}>Place order</button>
      {/* <button onClick={()=>navigate("order",{replace:true})}>Place order</button> */}
    </div>
  )
}
