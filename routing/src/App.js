import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Order from './Order';
import PageNotFound from './PageNotFound';
import Product from './Product';
import Cars from './Cars';
import Bike from './Bike';
import User from './User';
import UserDetails from './UserDetails'
// import Admin from './Admin';
import Profile from './Profile'
import Login from './Login'
import Requireauth from './Requireauth'
import { AuthenticationProvider } from './AuthenticationProvider';
function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="order" element={<Order/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="products" element={<Requireauth><Product/></Requireauth>}>
          <Route index element={<Cars/>}></Route>
            <Route path="cars" element={<Cars/>}></Route>
            <Route path="bike" element={<Bike/>}></Route>
        </Route>
        <Route path="users" element={<User/>}></Route>
        <Route path="users/:userid" element={<UserDetails/>}></Route>
        {/* <Route path="users/:admin" element ={<Admin/>}></Route> */}
        <Route path="profile" element={<Requireauth><Profile/></Requireauth>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
      </AuthenticationProvider>
    </div>
  );
}
export default App;

