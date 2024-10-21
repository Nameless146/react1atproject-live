import React from 'react'
import { Link } from 'react-router-dom'
import Card from "./decribe1"






function Describes() {
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
    
    
    
    <img className='w-96 h-1.5 bg-[#E5E7EB] justify-center mt-4' src="stepbar.png" alt="" />
    
    
   
    
    <div className='md:space-x-6 space-x-4 md:flex flex ml-12 '>
    <button className='bg-white text-black h-10 w-32 rounded-md hover:bg-slate-300'><Link to='/NewIncident'>Back</Link></button>
    
    <button className='h-10 w-32 bg-[#F26922] rounded-md text-white hover:bg-orange-400'><Link to='/IncidentTitle'>Next step</Link></button>
    </div>
    
    </div>
    
    
    </div>





    <div className="grid ml-80 mt-20 ">

<h1 className='font-bold text-3xl'>Which of these best describes the incident?</h1>
{/* First row of cards */}
<div className=''>


<div className=" grid place-items-center justify-center grid-cols-4 sm:grid-cols-2  lg:grid-cols-6  gap-6     ">
   <Card
     imageSrc="pic1.png" 
    
     description="Avalanche" 
     
   />
   <Card
     imageSrc="pic2.png" 
    
      description="Biological" 
  
   />
   <Card
     imageSrc="pic3.png" 
    
     description="Blizzard" 
   
   />
   <Card
     imageSrc="pic4.png" 
    
     description="Cold/Freezing" 
     
   />
 </div>


 {/* Second row of cards */}
<div className=" grid place-items-center justify-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-6  gap-6   ">
   <Card
     imageSrc="pic5.png" 
     
     description="Drought" 
     
   />
   <Card
     imageSrc="pic6.png" 
   
      description="Earthquake" 
     
   />
   <Card
     imageSrc="pic7.png" 
  
     description="Flooding" 
     
   />
   <Card
     imageSrc="pic8.png" 
    
     description="Heat Wave" 
     
   />
 </div>


{/* Third row of cards */}
<div className="  grid place-items-center justify-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-6 gap-6 ">
   <Card
     imageSrc="pic9.png" 
     
     description="Hail" 
    
   />
   <Card
     imageSrc="pic10.png" 
      
      description="Lightning" 
    
   />
   <Card
     imageSrc="pic11.png" 
     
     description="Man Made" 
     
   />
   <Card
     imageSrc="pic12.png" 
     
     description="Mudslide" 
     
   />
 </div>



 {/* Forth row of cards */}
<div className="  grid place-items-center justify-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-6 gap-6 ">
   <Card
     imageSrc="pic13.png" 
     
     description="Severe Storm" 
    
   />
   <Card
     imageSrc="pic13.png" 
      
      description="Strong Wind" 
    
   />
   <Card
     imageSrc="pic15.png" 
     
     description="Tornado" 
     
   />
   <Card
     imageSrc="pic16.png" 
     
     description="Tsunami" 
     
   />
 </div>


 {/* Fifth row of cards */}
<div className=" grid  place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
   < Card
     imageSrc="pic17.png" 
     
     description="Volcanic Eruption" 
    
   />
   <Card
     imageSrc="pic18.png" 
     
     description="Wildfire" 
     
   />
   
 </div>

 </div>
 
 
 </div>
</div>
     </>

        
    )
}

export default Describes