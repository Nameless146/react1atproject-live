import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);







  return (
    <nav className="bg-[#E4E4E7] ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#A1A1AA] hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-lg font-bold">
              <img className='mt-3 ml-9 h-10 w-32 md:w-36 lg:w-36 sm:w-36' src='../../public/logo.png' />
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-slate-400 px-3 py-4 rounded-md text-md font-medium ">
             <NavLink to="">Dashboard</NavLink> 
                </a>
                <a href="#" className="text-gray-300  hover:text-slate-400   px-3 py-4 rounded-md text-md font-medium ">
              <NavLink to="/Incidents">Incidents</NavLink> 
                </a>
                <a href="#" className="text-gray-300 hover:text-slate-400 px-3 py-4 rounded-md text-md font-medium">
                Locations </a>
                <a href="#" className="text-gray-300 hover:text-slate-400 px-3 py-4 rounded-md text-md font-medium">
                Activities
                </a>
                <a href="#" className="text-gray-300 hover:text-slate-400 px-3 py-4 rounded-md text-md font-medium">
                Documents
                </a>
                <a href="#" className="text-gray-300 hover:text-slate-400 px-3 py-4 rounded-md text-md font-medium text-nowrap">
                Cypher Ai
                </a>

                <div className='flex py-4 space-x-5' >
  <img className='h-10' src="../../public/notification.png" alt="" />
  <img className='h-10 rounded-3' src="../..//public/profilepic.png" alt="" />
  <div className=''>
    <h3>Usman Zafar</h3>
    <p>usmanzafar@gmail.com</p>
  </div>

               </div>



              </div>
            </div>
          </div>

        </div>

      </div>

      <hr className='h-1 bg-slate-400' />





      {/* Mobile menu */}
      {isOpen && (

        <div className="sm:hidden bg-slate-100" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-[#a1a1aa] hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
           <NavLink to='/'>Dashboard</NavLink> 
            </a>
            <a href="#" className="text-[#a1a1aa] hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
           <NavLink to='/Incidents'> Incidents</NavLink>
            </a>
            <a href="#" className="text-[#a1a1aa] hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Locations
            </a>
            <a href="#" className="text-[#a1a1aa] hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Activities
            </a>
            <a href="#" className="text-[#a1a1aa] hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Documents
            </a>
            <a href="#" className="text-[#a1a1aa] hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Cypher Ai
            </a>





          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
