import React from 'react'
import LogoPubg from "../../assets/images/images/logoPabg.png"

function GrandFinal() {
  return (
    <div className='bg-[teal] h-screen'>
   <div className='max-w-container mx-auto'>
    <div className="flex items-center">
        <div className='w-[20%]'>
            <img src={LogoPubg} alt="" />
        </div>
        <div className='w-[56%]'>
           <div className='bg-[#444444] '>
              <h1 className="pl-2 font-Oswald text-white text-[80px] font-bold tracking-[10px]">GRAND-FINAL</h1>
              
              <h2 className="font-semibold my-4 text-2xl pl-5 text-2xl font-semibold font-dm text-white">MATCH 1-ERANGEL</h2>
              
                <div className='bg-white'>
                  <h5 className=" text-center mt-2  font-dm  text-5xl font-semibold text-black">BATTLE OF THOUGHTS</h5>
                </div> 
           </div>
        </div>
    </div>

   </div>
    </div>
  )
}

export default GrandFinal