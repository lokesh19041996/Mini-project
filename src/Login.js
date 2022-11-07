import React, { useState} from 'react';
import { useNavigate} from "react-router-dom";

import './login.css'
import axios from 'axios'
export default function Login() {
  const [user, setuser] = useState({ email: "", password: "" });
  let navigate=useNavigate()
  let handleChange = (e) => {
    let newUser = { ...user }
    newUser[e.target.name] = e.target.value
    setuser(newUser)
  }
const handleSubmit = async () => {
    let us = await getAllUsers()
    // console.log(allUsers);
    if (us.length === 0) {
      alert("Please enter the login details...")
   
  } else {
    let logged = us.find( myus => (myus.email == user.email && myus.password  == user.password)) ;
    if (logged) {
          localStorage.setItem(("loginUser"), JSON.stringify(logged));
        navigate('/customer')
      }
       else if(!logged){
        alert("username and password mismatch please try again...")
       }
      else
      {
          alert("please enter the login details...")
          // navigate("/regester")

      }
 

}
  }
  const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/users").then((res) => {
        resolve(res.data);
      })
    })

  }
  return (
    <div className="card">
      <div className="card-body">

        <h3>Login Here</h3>
        <form >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" onChange={(e) => { handleChange(e) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={(e) => { handleChange(e) }} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}