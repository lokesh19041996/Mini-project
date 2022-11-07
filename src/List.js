
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './Sidebar'
import './list.css'

export default function List() {
  let [persons,setpersons]=useState([])
   useEffect(()=>{
    fetch(" http://localhost:3000/persons").then(res=>res.json())
    .then(data=>setpersons(data))
   })
   let deleteUser=(id)=>{
    fetch("http://localhost:3000/persons"+id,{
      method:"DELETE"
    }).catch(err=>console.log(err))
   }
  return (
    <div>
      <Nav/>
      <Sidebar/>
      <table className='table table-bordered table-striped'>
        <tbody>
            <tr>
                <th>image</th>
                <th>Name</th>
                <th>place</th>
                <th>orders</th>
                <th>Manage</th>
                
                
                
            </tr>
            {
                    persons.map((persons)=>{
                        return <tr>
                            <td><img  src={persons.image}/></td>
                            <td>{persons.name}</td>
                            <td>{persons.location}</td>
                            <td>{persons.orders}</td>
                           
                           
                            <td>
                                
                            <Link className='btn btn-success' to={`/edit/${persons.id}`}>Edit</Link>
                              <button type="button" className='btn btn-danger' onClick={()=>deleteUser(persons.id)}>Delete</button>
                            </td>
                        </tr>
                    })
            }
        </tbody>
      </table>
    </div>
  )
}
