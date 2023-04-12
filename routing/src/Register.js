import React,{useState} from 'react'
import { useAuth } from './AuthenticationProvider'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Login from './Login';
import User from './User';
const  Register= () => {
    const location=useLocation()
    const navigate=useNavigate()
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [age,setAge]=useState("");
    const [city,setCity]=useState("");
    const [addr,setAddr]=useState("");
    const [pincode,setPincode]=useState(""); 
    const [rad,setRad]=useState("");
    const [isregi,setisregi]=useState("");
    const [selectValue, setSelectValue] = useState("");
    const [selectrole, setSelectrole] = useState("");
    const [channel, setChannel] = useState("");
    const [company, setCompany] = useState("");
    const [amount, setAmount] = useState("");
    const auth=useAuth();
    const [formData, setFormData] = useState({
      user: '',
      email: '',
      age: ''
    });
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      
    };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const jsonData = JSON.stringify(formData);
    //   console.log(jsonData);
    // };;
    const click=(e)=>
    {
      setisregi("true");
      // document.getElementById("d2").style.display="none";
      // document.getElementById("d1").style.display="block";
      //  var b={
      //   name:{user},
      //     email:{email},
      //     age:{age}
      //  }
      //   setFormData({
      //     ...formData,
      //     b
          
      //   })
      
      e.preventDefault();
      const jsonData = JSON.stringify(formData);
      console.log(jsonData);
     
    }
    
    const select = (event) => {
        const value = event.target.value;
        setSelectValue(value);
    };

    const selectrolefn = (event) => {
        const value = event.target.value;
        setSelectrole(value);
        if(value==="influencer")
        {
            document.getElementById("influ").style.display="block";
            document.getElementById("cus").style.display="none";
        }
        else if(value==="customer")
        {
            document.getElementById("cus").style.display="block";
            document.getElementById("influ").style.display="none";
        }
    }
  return (
    <div>
      <div id="d2">
        Username:<input value={formData.user} name="user"onChange={handleChange}/> <br></br>
        email:<input value={formData.email} name="email"onChange={handleChange}/> <br></br>
        Age:<input value={formData.age} name="age"onChange={handleChange}/> <br></br>
      
      
      
      {/* Username:<input value={user} name="user"onChange={(e)=>{setUser(e.target.value)}}/> <br></br>
      Email:<input value={email} name="email"onChange={(e)=>{setEmail(e.target.value)}}/> <br></br>
      Password:<input value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br></br>
      Age:<input value={age} name="age"onChange={(e)=>{setAge(e.target.value)}}/> <br></br> */}
      Address:<textarea value={addr} onChange={(e)=>{setAddr(e.target.value)}}/><br></br>
      City:<input value={city} onChange={(e)=>{setCity(e.target.value)}}/><br></br>
      Pincode:<input value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/><br></br>
      Signup as:
      <select onChange={selectrolefn}>
                <option defaultValue disabled>
                    Select platform
                </option>
                <option value="influencer">Influencer</option>
                <option value="customer">Customer</option>
        </select>
      <br></br>
      
        {/* Influencer */}
        <div id="influ" style={{display:"none"}}>
            Platform used:
            <select onChange={select}>
                <option defaultValue disabled>
                    Select platform
                </option>
                <option value="youtube">Youtube</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
            </select>
            <br></br>
            Name of the Channel<input type="text" value={channel} onChange={(e)=>{setChannel(e.target.value)}} />
            <br></br>
        </div>

        {/* Customer */}
        <div id="cus" style={{display:"none"}}>
            Company Name<input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
            <br></br>
            Budget<input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
            <br></br>
        </div>


      <button onClick={click}>Register</button>
      {user}
      {email}
     {/* <User name={user}/> */}
      </div>
    </div>
  )
}
export default Register
