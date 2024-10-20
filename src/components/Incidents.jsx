import React from 'react'
 import Cards from './Cards'

import { Link } from 'react-router-dom'
 
function Incidents() {
  return (
    <>
   <div className=''>

   <div className='md:flex flex   pb-7  bg-[#E4E4E7]  '>
  
  
  <div className='h-px bg-gray-600'></div>
    
    <div className='md:ml-16 mt-9 ml-6 mr-96 justify-start'>
     <p className='text-slate-400'>Home - Incidents</p>
     <h1 className='text-3xl font-bold '>Incidents</h1>
    </div>
    
    
    
    <div className='md:flex grid md:gap-14 gap-3 md:mt-10 mt-4 '>
    
    <div className='bg-white h-10 w-44 rounded-sm flex  top-[-567px]'>
    
    <img className='h-10' src="../../public/searchicon.png" alt="" />
    
    <input placeholder='Search Incident' />
    
    </div>
    
    <div className='md:space-x-6 space-x-4 md:flex flex  '>
    <button className='bg-white h-10 w-44 rounded-md ml-4'>Sort By: <span className='font-semibold'>Date modified</span></button>
    
   
    <button  className='h-10 w-32 bg-[#F26922] rounded-md text-white hover:bg-orange-400 '> <span className='text-xl font-semibold text-white'>+</span><Link  to="/NewIncident">New Incident</Link> </button>

    </div>
    
    </div>
    
    
    </div>
  
<Cards></Cards>


    </div>







    </>
  )
}

export default Incidents
