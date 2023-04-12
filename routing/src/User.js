import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
const User = (props) => {
    const [search,setSearch]=useSearchParams()
    const filter=search.get("filter")==="active"
  return (
    <div>
        <div class="card" style={{width: "18rem;" }}>
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          <div class="card-body">
            <h5 class="card-title">{props.name} customer</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{props.name}</li>
            {/* <li class="list-group-item">{props.company}</li>
            <li class="list-group-item">{props.addr}</li> */}
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        
        {/* <div class="card">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div> */}

      <h1 class="text-primary">User1</h1>
      <h1 class="text-danger">User2</h1>
      <h1>User3</h1>
      <button onClick={()=>setSearch({filter:"active"})}>Active</button>
      <button onClick={()=>setSearch({})}>All Users</button>
      {filter?"Active users":"All users"}
    </div>
  )
}

export default User

