import React from 'react'



function Eelemination({filteredData}) {
//   dead
// : 
// 4
// kills
// : 
// 37
// teamId
// : 
// "64d7a79330461b8a74a0aa98"
// 
// : 
// "misaht "

// : 

  return (
    <div className=' pb-5'>
    <div className='w-[250px] mx-auto '>  
        <div className="items-center flex pt-5 gap-x-3">
            <div className='w-[50px]  bg-white relative border  '>
                <img src={filteredData?.temeLogo} alt="" />
                <div className='w-[50px] h-[50px] -z-50 absolute bottom-[30%] -translate-y-1/2 -right-4  bg-black rotate-45'></div>
            </div>

            <div>
                <div className='bg-[#444444] w-[180px] '>
                <h1 className="text-center tracking-[2px] font-pop text-white  text-[12px] font-bold">TEAM ELIMINATION</h1>
                <h2 className="font-semibold my-1 w-32 mx-auto text-xl text-center  font-dm text-white">{filteredData?.teamName}</h2>
                
                    <div className='bg-white flex'>
                      <h5 className="w-1/2 py-2 text-xs  font-normal text-center  font-pop  text-black">{filteredData?.kills}</h5>
                      <h5 className="w-1/2 py-2 text-xs font-normal text-center   font-pop  text-black  bg-[aqua]">BATTLE OF THOUGHTS</h5>
                    </div> 
                </div>
            </div>
        </div>        
      
    </div>
    </div>
  )
}

export default Eelemination