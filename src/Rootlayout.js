import React from 'react'
import NavBar from './components/navbar/NavBar';
import {Outlet} from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
      <div className='content-container'>
        <div className='container'>
       <NavBar/> 
       </div>
       <Outlet/>
    </div>
    </div>
  )
}

export default Rootlayout;
