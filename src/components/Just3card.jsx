import React from "react"
import Card from "./Just3card1"
import { Link } from "react-router-dom"


function Just3card(){
    return(
        <>





<div className="grid h-screen place-items-center mt-20">

<div className="grid gap-6">
<h1 className="text-4xl font-bold text-center">Let’s get started</h1>
<p className="text-[#71717A] mt-4 text-center">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
<img className="md:w-auto w-96 ml-12" src="Group 1171276283.png" alt="" />
</div>












     {/* First row of cards */}
    <div className="  grid md:grid place-items-center      grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 ">
        <Card
          imageSrc="Frame (1).png" 
          title="What type of incident?" 
          description="Choose the category that best describes the incident." 
         
        />
        <Card
          imageSrc="Frame (2).png" 
          title="Tell us about theincident?" 
         description= "Let’s connect the dots  and see where to start." 
          
        />
        <Card
          imageSrc="Frame (3).png" 
          title="Where did the incident occur?" 
          description="Lorem ipsum dolar sit general sac mascho werho" 
         
        />
       
      </div>

     
   
      <button className="bg-[#F26922] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-red-400 mt-40 ">

<Link to="/Describe" >Get started</Link></button>
      
      
      </div>
     </>

        
    )
}



export default Just3card