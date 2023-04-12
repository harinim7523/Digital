import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      All products
      search:<input/> <br></br>
      <nav>
        <Link to="cars">Cars</Link>
        <Link to="bike">Bike</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Product
