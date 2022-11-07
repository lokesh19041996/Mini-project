
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from "react-router-dom";
export default function EditUser() {
    let [user,setUser]=useState([])
    let params=useParams();
    let navigate=useNavigate();
    // console.log(user)
    useEffect(()=>{
        fetch("http://localhost:3000/persons"+params.uid).then(res=>res.json())
        .then(data=>setUser(data))
    },[params.uid]);
    let handleChange=(e)=>{
       
        user={...user,[e.target.name]:e.target.value};

    }
    let handleSubmit=()=>{
    
        user={...user,name:user.name,location:user.location,orders:user.orders};
        
        console.log(user);
        fetch("http://localhost:3000/persons"+user.id,{
            method:'PUT',
            body:JSON.stringify(user),
            headers:{"content-type":"application/json"}
        }).then(()=>navigate("/list")).catch(err=>console.log(err));
    }
  return (
    <div className='card'>
        <div className='card-header'>EditUserInformation</div>
        <div class="card-body">
        <div>
            <label htmlFor='uid'>UserId</label>
            <input type="text" name="id" id="uid" className="form-control" defaultValue={user.id} disabled/>
        </div>
        <div>
            <label htmlFor='uname'>Name</label>
            <input type="text" name="name" id="uname" className="form-control" onChange={(e)=>{handleChange(e)}} defaultValue={user.name} />
        </div>
        <div>
            <label htmlFor='location'>location</label>
            <input type="text" name="location" id="location" className="form-control" onChange={(e)=>{handleChange(e)}} defaultValue={user.location} />
        </div>
        <div>
            <label htmlFor='orders'>Orders</label>
            <input type="text" name="orders" id="orders" className="form-control" onChange={(e)=>{handleChange(e)}} defaultValue={user.orders} />
        </div>
        
        <div>
            <button type='button' onClick={handleSubmit}>UpdateUser</button>
        </div>
        </div>




    </div>
  )
}
