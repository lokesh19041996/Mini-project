import React,{useEffect, useState} from 'react'
import Nav from './Nav'
import './orders.css'
export default function Oreders() {
  const [data, setdata] = useState({})
  useEffect(()=>{
    fetch(" http://localhost:3000/persons").then(res=>res.json())
    .then(data=>setdata(data))
   })
  return (
    <>
      <Nav/>
      <h2>Orders</h2>
      <h2>Ward bell</h2>
      <table class="table">
  <thead class="table-dark">
  <tr>
<th>Id</th>
<th>Title</th>
<th>Price</th>
</tr>
</thead>
<tbody>
  {
    data?.map?.((data)=>{
   return <tr>
    <td>{data?.order?.id}</td>
    <td>{data?.order?.title}</td>
    <td>{data?.order?.cost}</td>
   </tr>
    })
  }
</tbody>

    </table>
    <h2>Ward bell</h2>
      <table class="table">
  <thead class="table-dark">
  <tr>
<th>Id</th>
<th>Title</th>
<th>Price</th>
</tr>
</thead>
<tbody>
  {
    data?.map?.((data)=>{
   return <tr>
    <td>{data?.order?.id}</td>
    <td>{data?.order?.title}</td>
    <td>{data?.order?.cost}</td>
   </tr>
    })
  }
</tbody>

    </table>
    </>
  )
}
