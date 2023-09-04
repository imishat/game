import React from 'react'

import Logokisuo from "../../assets/images/images/logos.png"

function Eelemination() {
  return (
    <div className='bg-[teal] h-screen '>
    <div className='max-w-container mx-auto'>     
        <div className="flex items-center gap-x-7 pt-5">
            <div className='w-[20%]  bg-white relative border  '>
                <img src={Logokisuo} alt="" />
                <div className='w-[50px] h-[50px] -z-50 absolute bottom-[30%] -translate-y-1/2 -right-4  bg-black rotate-45'></div>
            </div>

            <div className='w-[70%]'>
                <div className='bg-[#444444] '>
                <h1 className="pl-2 tracking-[5px] font-Oswald text-white text-[80px] font-bold">TEAM ELIMINATION</h1>
                <h2 className="font-semibold my-3 text-3xl pl-5 text-[aqua]   font-dm text-white">DREAM TO DESTATION</h2>
                
                    <div className='bg-white flex justify-center'>
                      <h5 className="w-1/2 py-2  font-semibold text-center  text-xl font-dm  text-black">BATTLE OF THOUGHTS</h5>
                      <h5 className="w-1/2 py-2 font-semibold text-center font-dm  text-xl  text-black  bg-[aqua]">BATTLE OF THOUGHTS</h5>
                
                    </div> 
                </div>
            </div>
        </div>        
    </div>
    </div>
  )
}

export default Eelemination