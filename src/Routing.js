import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Logout from './Logout'
import Main from './Main'
import Oreders from './Oreders'
import Sidebar from './Sidebar'

export default function Routing() {
  return (
    <div>
        <Routes>
            
            <Route path="/orders" element={<Oreders/>}/>
            <Route path="/logout" element={<Logout/>}/>
            
        </Routes>
    </div>
  )
}
