import React,{useEffect,useState} from 'react'
import Nav from './Nav'

import Sidebar from './Sidebar';
import './grid.css'

export default function Gridview() {
  let [persons,setpersons]=useState([])
  useEffect(()=>{
   fetch(" http://localhost:3000/persons").then(res=>res.json())
   .then(data=>setpersons(data))
  })
  return (
    <>
      <Nav/>
      <Sidebar/>
      
 <div className='allign mt-5'>
  <div className='row'>
    <div className='cat'>
      {
      persons.map((usr)=>
          // return (<p key={usr.id}></p>
          <div className='allign'>
            <div className='card p-3 bg-secondery'>
              <h3>{usr.name}</h3><i class="fa fa-times" aria-hidden="true"></i>

            </div>
         <div className='card-body bg-info'>
          <p>Location:{usr.location}</p>
          <link></link><p>View Orders{usr.orders}</p>
         </div>
          </div>
      )
      
      }
    </div>
  </div>
 </div>
    </>
  )
}
