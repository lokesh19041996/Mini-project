import React, { useState } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import './add.css'
import { useNavigate } from 'react-router-dom'
export default function Add() {
  let navigate = useNavigate()
  let [user, setUser] = useState({})
  let handleChange = (e) => {
    
    user = { ...user, [e.target.name]: e.target.value };

  }
  let handleSubmit = () => {
    
    user={...user,name:user.name,location:user.location,orders:user.orders};
   
    console.log(user);
    fetch("http://localhost:3000/persons", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" }
    }).then(() => navigate("/list")).catch(err => console.log(err));
  }
  return (
    <>
      <Nav />
      <Sidebar />
      <div className='form'>
        <div className='card-header'>AddUserInformation</div>
        <div class="card-body">

          <div>
            <label htmlFor='uname'>Name</label>
            <input type="text" name="name" id="uname" className="form-control" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='location'>Location</label>
            <input type="text" name="location" id="location" className="form-control" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='orders'>Orders</label>
            <input type="text" name="orders" id="orders" className="form-control" onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Image</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div>
            <button type='button' onClick={handleSubmit} className="btn btn-primary">AddUser</button>
          </div>
        </div>
    </div>


    </>
  )  
}
