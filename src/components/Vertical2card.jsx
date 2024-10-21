import React from 'react'

function Vertical2card() {
  return (
    <>
    
    

    <div className="p-4 w-[679px] mt-[-300px] ">
     
      <div className="space-y-4">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center shadow-md">
          <img
            src="4vertical2card.png"
            alt="Activity"
            className="w-16 h-16 rounded-xl object-cover mr-4"
          />
          <div>
            <h2 className="font-bold text-lg">Activity name</h2>
            <p className="text-sm text-gray-500">Location name + 16.1222, -122.424</p>
            <p className="font-semibold text-xl">$1,456,654.00</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center shadow-md">
          <img
            src="4vertical2card.png"
            alt="Activity"
            className="w-16 h-16 rounded-xl object-cover mr-4"
          />
          <div>
            <h2 className="font-bold text-lg">Activity name</h2>
            <p className="text-sm text-gray-500">Location name + 16.1222, -122.424</p>
            <p className="font-semibold text-xl">$1,456,654.00</p>
          </div>
        </div>
      </div>
    </div>
  


    </>
  )
}

export default Vertical2card