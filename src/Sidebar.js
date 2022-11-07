import React from 'react'
import { Link,Routes,Route,Outlet } from 'react-router-dom'
import Add from './Add'
import Gridview from './Grid'
import { Grid, Image } from "semantic-ui-react";

import people from "./images/download.png"
import List from './List'
import Nav from './Nav'
import card  from "../src/images/card.png";


import './Sidebar.css'


export default function Sidebar() {
   
    return (     
<>
<Nav/>
<div className='content'>
<h2>Customers</h2>



<nav class="navbar bg-info ">
<ul class="nav" >
 
  <li class="nav-item">
    <img className='img2' src= {card}/>
    <Link class="nav-link-item" to="/grid">Card View</Link>
  </li>
  <li  class="nav-item">
  <i class="fa-solid fa-list"></i>
    <Link class="nav-link-item" to="/list">List View</Link>
  </li>
  <li class="nav-item">
  <i class="fa fa-plus" aria-hidden="true"></i>

    <Link class="nav-link-item " to="/add">Add Customer</Link>
  </li>
</ul>
</nav>
<Outlet/>


</div>
</>
    )
} 