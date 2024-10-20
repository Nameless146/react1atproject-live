import React from 'react';





const Card = ({ imageSrc,  description , }) => {
  return (



     <div className="relative mt-8  grid max-w-sm rounded overflow-hidden shadow-lg ">
  

    


    <div className="group relative  border border-gray-200 rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl  bg-[#E4E4E7] group flex  gap-3  w-40 h-16   hover:bg-[#F26922]   hover:text-white   items-center justify-center h-scree">
      <img className="w-5 h-9 mt-2 "  src={imageSrc} alt="Card image"/>
      <p className=" text-[#71717A]    transition duration-300">
        {description}  </p>
       

    </div>

   
  </div>






);
};


 
   
export default Card;
