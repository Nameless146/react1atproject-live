import React, { Component } from 'react'

import { Link } from 'react-router-dom'


function Map () {

    return (
      <>

<div className='grid gap-3 md:grid lg:grid '>


<div className='md:flex flex   pb-7  bg-[#E4E4E7]  '>
  
  
  <div className='h-px bg-gray-600'></div>
    
    <div className='md:ml-16 mt-9 ml-6 mr-56 justify-start'>
     <p className='text-slate-400'>Home - Incidents - New Incident</p>
     <h1 className='text-3xl font-bold '>New Incident</h1>
    </div>
    
    
    
    <div  className='md:flex grid md:gap-14 gap-3 md:mt-10 mt-4 '>
    
    
    
    <img className='w-96 h-1.5 bg-[#E5E7EB] justify-center mt-4' src="stepbar.png" alt="" />
    
    
   
    
    <div className='md:space-x-6 space-x-4 md:flex flex ml-12 '>
    <button className='bg-white text-black h-10 w-32 rounded-md hover:bg-slate-300'><Link to="/IncidentTitle">Back</Link></button>
    
    <button className='h-10 w-32 bg-[#F26922] rounded-md text-white hover:bg-orange-400'><Link to='/'>Finished</Link></button>
    </div>
    
    </div>
    
    
    </div>















<h1 className='text-3xl font-bold md:ml-[400px] lg:ml-[400px] ml-7 mt-[70px]  '>Where’s the incident?</h1>

<p className='font-semibold text-lg md:ml-[400px] ml-7 text-[#71717A] text-nowrap'>Enter a GPS, address. or pin point on the map. Try to be as accurate as <br /> possible, or click:Jurisdiction Wide</p>

</div>

     


<div className='relative mt-8 '>



<div className='md:ml-[420px] ml-10 absolute  mt-6 grid gap-3 '>



<div className='flex bg-white  rounded-xl'>
  <img src="searchicon.png" className='h-7 w-7 mt-3 ml-5' alt="" />
  <input className='h-12 w-64 text-left rounded-lg' type="text" placeholder='Enter incident address or GPS'/>
</div>

<div className='flex bg-white rounded-xl'>
  <img src="searchicon.png" className='h-7 w-7 mt-3 ml-5' alt="" />
  <input className='h-12 w-64 text-left rounded-lg' type="text" placeholder='Pinpoint damage'/>
</div>
 

</div>

<img className='md:w-[700px] w-[500px]  md:ml-[400px] rounded-md ml-7 ' src="map.png" alt="" />


</div>
       

      

      </>
    
  
    )}

export default Map