import React from 'react'
import { Link } from 'react-router-dom'
import Largestpart1 from './Largestpart1'
import Vertical2card from './vertical2card'
import Vertical2card1 from './vertical2card1'

function Largestpart() {
  return (
    <>
    <div>
    <div className='flex'>
<div className='grid md:grid-cols-5  bg-[#E4E4E7] '>

    <div className='md:ml-16 mt-9 ml-6 mr-96 justify-start grid gap-4 pb-6'>
     <p className='text-slate-400'>Incidents - DR-4699 March 2023 Severe Storms </p>
     <div className='flex'>
        <img className='w-7 h-7 mt-1' src="pic13.png" alt="" />
     <h1 className='text-3xl font-bold text-nowrap ml-3'>DR-4699 March 2023 Severe Storms</h1>
     </div>
    </div>
    
    </div>




    <div className='grid  md:grid-cols-7 bg-[rgb(228,228,231)]'>
    
    <div className='md:flex grid md:gap-14 gap-3  md:mt-10 mt-4 mr-12'>
    
    <div className='bg-white h-10 w-44 rounded-sm flex  top-[-567px]'>
    
    <img className='h-10' src="searchicon.png" alt="" />
    
    <input placeholder='Search Incident' />
    
    </div>
    
    <div className=' md:flex flex gap-3 '>
    <button className='bg-white h-10 w-44 rounded-md ml-4'>Sort By: <span className='font-semibold'>Date modified</span></button>
    
   
    <button  className='h-10 w-32 bg-[#F26922] rounded-md text-white hover:bg-orange-400 '> <span className='text-xl font-semibold text-white'>+</span><Link  to="/NewIncident">New Location</Link> </button>

    </div>
    </div>
    </div>
    
    </div>
   
    </div>



<div className='flex mt-11'>
    
  
    <div className=" grid-cols-5 ">


  <div className='flex ml-7'>
    <img className='w-3 h-6 mt-3  '  src="location.png" alt="" />

    <div className='ml-6 '>
    <p className='text-[#E4E4E7]'>Location</p>
    <h1 className='text-nowrap text-xl font-bold'>Tulare County,  Los Angles, CA 23415</h1>
    </div>



    </div>

    

    

    <div className='flex gap-7 mb-96 '>

<img className='flex '/>
  <div className=' '>
    <img className='w-7 h-7 mt-3 '  src="youtube.png" alt="" />
    </div>

    <div className=' '>
    <p className='text-[#E4E4E7]'>Approx. Cost:</p>
    <h1 className='text-nowrap text-xl font-bold'>$60,607,456.00</h1>
<hr className='bg-black w-[500px] mt-10'/>

<h1 className='font-bold text-xl mt-14'>Description</h1>
<p className='text-[#71717A] mt-4'>Lorem ipsum dolar sit general sac mascho <br/> werhoLorem ipsum dolar <br /> sit general sac mascho werhoLorem ipsum dolar sit general <br /> sac mascho werhoLorem ipsum <br />dolar sit general sac mascho <br />werhoLorem ipsum dolar sit general sac mascho <br /> werhoLorem ipsum dolar sit general sac mascho werho</p>
<hr className='bg-black  mt-8'/>
<h1 className='text-xl font-bold mt-10'>Locations</h1>
<Largestpart1></Largestpart1>





  </div>
    <div className='grid   '> 
        <p className='text-slate-500 text-lg'> Incident Map</p>
        <img className='h-[500px] w-[2000px]' src="map.png" alt=""  />
        <p className='text-slate-500 text-lg'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
    </div>

</div>











</div>
</div>


<Vertical2card></Vertical2card>

<Vertical2card1></Vertical2card1>

</>
  )
}

export default Largestpart