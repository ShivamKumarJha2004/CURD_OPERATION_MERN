
import { useEffect, useState } from "react"
import "./edit.css"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import toast  from "react-hot-toast"
function Edit() {
     const users={
    fname:"",
    lname:"",
    email:""
    }
    const Navigate=useNavigate();
    const [user,setuser]=useState(users);
    const {id}=useParams();  
  const inputchangeHandler=(e)=>
    {
      const {name,value}=e.target;
      setuser({...user,[name]:value});
      console.log(user);
    }
    useEffect(()=>{

      axios.get(`http://localhost:8000/api/getOne/${id}`)
      .then((response)=>{
         setuser(response.data)
      }).catch((err)=>{
        console.log(err);
      })
    },[id])
    const submitHandler=async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/update/${id}`,user)
      .then((resp)=>{
        toast.success(resp.data.msg);
        Navigate("/")
      }).catch((e)=>{
        console.log(e);
      })

    }
  
  return (
    <div className="adduser">
        
        <Link to={"/"} className="back"><i class="fa-solid fa-arrow-left"></i> Back</Link>
       
       
        <h3 style={{textAlign:"Center"}}>Add new user</h3>
        <form onSubmit={submitHandler}>
            <div className="input">
                <div  className="fn"><label htmlFor="fname">First name</label>
                <input value={user.fname}onChange={inputchangeHandler}type="text"  className="fname" name="fname" placeholder="Enter First Name" autoComplete="off"/>
                </div>
              <div className="ln"> <label htmlFor="lname">Last name</label>
                <input  value={user.lname}type="text" onChange={inputchangeHandler} className="lname" name="lname" placeholder="Enter Last Name" autoComplete="off"/>
                </div> 
               
               <div className="email"> <label htmlFor="email">Email</label>
                <input value={user.email}type="text"  onChange={inputchangeHandler}className="email" name="email" placeholder="Enter email here" autoComplete="off"/>
                </div>
             
                <div>
                    <button style={{marginRight:"15px"}} className="submit">Update <i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
        </form>
    </div>

  )
}
export default Edit
