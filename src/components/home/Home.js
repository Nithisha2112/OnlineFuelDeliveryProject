import React from 'react'
import "../home/Home.css"
import homeb from "../Images/homeb.avif"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Home() {

  let navigate=useNavigate();
  return (
    <div>
    <div className="home container-fluid img-fluid" >/
      <div className='header'>
        <p className='lead  fw-bold' style={{ fontSize: '30px' }}>WELCOME TO OUR ON DEMAND FUEL DELIVARY</p>
        <p className=' lead ' style={{ fontSize: '30px' }}>Get the service at your doorstep</p>
        <button className='btn mybtn bg-info' onClick={()=>navigate('/Signup')}>JOIN US</button>
      </div>
       
    </div>
     
     </div>
  )
}

export default Home

