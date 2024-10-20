import React from 'react'
//import Navbardown from './navbardown'
import { Link } from 'react-router-dom'

function IncidentTitle() {
  return (
    <>


<div className='grid gap-3 md:grid lg:grid  '>


<div className='md:flex flex   pb-7  bg-[#E4E4E7]  '>
  
  
  <div className='h-px bg-gray-600'></div>
    
    <div className='md:ml-16 mt-9 ml-6 mr-56 justify-start'>
     <p className='text-slate-400'>Home - Incidents - New Incident</p>
     <h1 className='text-3xl font-bold '>New Incident</h1>
    </div>
    
    
    
    <div  className='md:flex grid md:gap-14 gap-3 md:mt-10 mt-4 '>
    
    
    
    <img className='w-96 h-1.5 bg-[#E5E7EB] justify-center mt-4' src="../../public/stepbar.png" alt="" />
    
    
   
    
    <div className='md:space-x-6 space-x-4 md:flex flex ml-12 '>
    <button className='bg-white text-black h-10 w-32 rounded-md hover:bg-slate-300'><Link to='/Describe'>Back</Link></button>
    
    <button className='h-10 w-32 bg-[#F26922] rounded-md text-white hover:bg-orange-400'><Link to='/Map'>Next step</Link></button> 
    </div>
    
    </div>
    
    
    </div>

    </div>
    










    
    <div id='container-1' className='bg-white w-[752px] h-[128px] ml-[360px] mt-10'>

      <h1 className='ml-[1px] font-semibold text-3xl'>Let’s give the incident a title?</h1>

      <p className='mt-2'>Make a title that will easily identify the incidents</p>

     <input placeholder= 'Add title here' className='bg-[#F4F4F5] m-4 pb-4 pr-[530px]  place-content-center rounded-lg pl-3'  type="text" /> 
      
      

    </div >

    <div id='container-2' className='bg-white w-[752px] h-[128px] ml-[360px] m-9'>

    <h1 className='text-3xl font-semibold '>Describe what happened during the incident?</h1>

    <p className='mt-2'>Share some information about the incident. The when, where, how. </p>

    <input placeholder='Type here' className='bg-[#F4F4F5] m-4  pr-[530px] rounded-lg pb-20  border-b-gray-300 pl-3' type="text" />

    </div >
    
    </>
  )
}

export default IncidentTitle