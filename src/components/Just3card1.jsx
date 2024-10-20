import React from 'react';


const Card = ({ imageSrc, title, description , }) => {
  return (



     <div className="bg-[#F4F4F5] relative mt-8 ml-10 md:ml-80 w-80 grid max-w-sm rounded overflow-hidden shadow-lg h-96 hover:scale-105 hover:shadow-2xl hover:bg-slate-100  transform transition duration-300">
  
    < div className="  flex gap-1   w-28 absolute top-7 ml-6 h-12   " >

    <img className="  " src= {imageSrc} alt="" />

      </div>




    <div className="mt-48 ml-5">
      <p className="text-2xl font-bold mb-2">{title}</p>
      <p className="text-md text-[#71717A] ">
        {description}  </p>
      

    </div>

   
  </div>






);
};


 
   
export default Card;
