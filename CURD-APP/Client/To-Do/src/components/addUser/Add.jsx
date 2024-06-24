import "./Add.css"

import React, { useState} from 'react'
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import toast  from "react-hot-toast"

const Add = () => {
  // const users=[]
  const [user,setuser]=useState({
    fname:"",
    lname:"",
    email:"",
    pass:""
  })
  function onchangeHandler(e)
  {
     
     setuser({...user,[e.target.name]:e.target.value})
     
  }
  const Navigate=useNavigate();

const submitForm= async (e)=>{
e.preventDefault()
try{
  const adduser=await axios.post("http://localhost:8000/api/create",user)
   const response=adduser.data;
  if(response.success)
    {
      
      toast.success(response.message)
    }

   Navigate("/")
}
catch(error)
{
  console.log(error);
}

  }
    return (
    <div className="adduser">
        
        <Link to={"/"} className="back"><i class="fa-solid fa-arrow-left"></i> Back</Link>
       
       
        <h3 style={{textAlign:"Center"}}>Add new user</h3>
        <form onSubmit={submitForm}>
            <div className="input">
                <div className="fn"><label htmlFor="fname">First name</label>
                <input value={user.fname}
                onChange={onchangeHandler}type="text"  className="fname" name="fname" placeholder="Enter First Name" autoComplete="off"/>
                </div>
              <div className="ln"> <label htmlFor="lname">Last name</label>
                <input value={user.lname} onChange={onchangeHandler} type="text" className="lname" name="lname" placeholder="Enter Last Name" autoComplete="off"/>
                </div> 
               
               <div className="email"> <label htmlFor="email">Email</label>
                <input  value={user.email} onChange={onchangeHandler}type="text" className="email" name="email" placeholder="Enter email here" autoComplete="off"/>
                </div>
                
                <div className="pass"> <label htmlFor="email">Password</label>
                <input  onChange={onchangeHandler}type="password" className="password" name="password" placeholder="Enter Password here" autoComplete="off"/>
                </div>
               
              
                <div>
                    <button className="submit">Add User <i class="fas fa-user"></i></button>
                </div>
            </div>
        </form>
    </div>

  );
}

export default Add;