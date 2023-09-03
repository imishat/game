import React from 'react'

import LogoPubg from "../../assets/images/images/logoPabg.png"

function Coming() {
  return (
   <>
     <section className='bg-hero h-screen bg-cover bg-center bg-[teal]'>
        <div className='max-w-container mx-auto'>

       <nav className='py-5'>
            <div className="flex gap-x-10 items-center">
                    <div className='w-[15%]'>
                       <img src={LogoPubg} alt="" />
                    </div>
                    <div className='w-[70%]'>
                       <div className="flex gap-x-10 items-center">
                        <h2 className='text-2xl font-semibold font-dm text-white'>PUBG MOBILE BATTLE OF THOUGHT SEASON 1</h2>
                        <h2 className='bg-[green] px-4 py-2 text-2xl font-semibold font-dm text-white'>GRAND FINAL M1/08</h2>
                       </div>
                       <h1 className='font-Oswald font-semibold text-white text-[80px] font-extrabold tracking-wide'>COMING NEXT MAP</h1>
                        
                    </div>
                </div>
      </nav>
      <div className='w-[600px]  mx-auto flex items-center bg-car bg-cover bg-center bg-no-repeat  border border-[5px] border-white h-96 justify-center'></div>
        </div>
      <div>
         dsafsdaf
      </div>
    </section>
   </>
  )
}

export default Coming