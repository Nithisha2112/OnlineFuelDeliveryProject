import React from 'react'
import "../aboutus/Aboutus.css"
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {CiYoutube} from 'react-icons/ci'

export default function Aboutus() {
  return (     
     <div className='para mt-10' >
     <p className='lead text-center'>We at out online delivery app, are wroking on the following problems in our day to day activities</p>
     <p className='lead text-center'>Wastage of fuel</p>
     <p className=' lead text-center'>increased CO2 emission</p>
     <p className=' lead text-center'>Wastage of time /money</p>
    <p className='lead text-center'>We can overcome these problems by reducing wastage in unwanted movement of vehicles such as in travel "from" and "to" the fuel station, unplanned journey for fueling the vehicles reduce traffic JAM due to congestion of vehicles at road side fuel stations and boardings at fuel stations etc. </p>
     <p className='lead'>we bwlieve that intense dedication is needed to do anything significant in this world. In this app ,we have dedicated out lives to a purpose that is larger than us.We
      are delivering diesel at the doorstep to all those who find it difficult to procure diesel from the retail outlet(petrol pump).The conventional procurement process leads 
      to wastage of diesel just to procure diesel leading to environmental damage due to pollution and spillages.Not to forget the time procurement.
     </p>
     
     <div className='iconcl d-flex justify-content-center align-items-center bg-dark ' >   
    <BsInstagram className='icons ' />
    <FaTwitterSquare className='icons '/>
    <FiGithub className='icons '/>
    <CiYoutube className='icons '/>
    </div>
     </div>
    
  )
}

