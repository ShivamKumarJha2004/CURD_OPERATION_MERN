import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./User.css"
import axios from 'axios'
import toast from 'react-hot-toast'
export default function User() {
  const [data,setdata]=useState([]);
  useEffect(()=>{
 const fetchData=async()=>{
  const response=await axios.get("http://localhost:8000/api/getdata")
   setdata(response.data.data); 

}
fetchData();
},[])
const deleteUser=async(user_id)=>{
  await axios.delete(`http://localhost:8000/api/delete/${user_id}`)
.then((response)=>{
setdata((prev)=>prev.filter((user)=>user._id !==user_id))
console.log(response);
toast.success(response.data.msg);


}).catch((error)=>{
  console.log(error);
})
}


  return (
    <div className='userTable'>
      <Link to={"/add"} className='add-btn'>Add User <i class="fas fa-user"></i></Link>
      <table border={1} cellSpacing={0}  >
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
       <tbody >
        {
          data.map((items,index)=>{
            return(
<tr key={items._id}>
        <td>{index +1}</td>
        <td>{items.fname} {items.lname}</td>
        <td>{items.email}</td>
        <td><button onClick={()=>deleteUser(items._id)} className='dlt-btn'>Delete <i class="fa-solid fa-trash"></i></button>
        <Link to={`/edit/`+items._id} className='btn-edit'>Edit <i class="fa-solid fa-pen-to-square"></i></Link>
        </td>
        </tr>

              
            )
          
          })
        }
               </tbody>

      </table>


    </div>
  )
}
