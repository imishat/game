import React from 'react'

import data from '../../data/data'
import LogoPubg from "../../assets/images/images/logoPabg.png"
import PubgMan from "../../assets/images/images/pabgMan.png"

function WinerTeam() {
  return (
    <div className=' bg-[teal] h-screen'>
     <div className='max-w-container mx-auto'>
        <nav className=' py-4'>
            <div className="gap-x-20 flex items-center">
                    <div className='w-1/6'>
                    <img src={LogoPubg} alt="" />
                    </div>
                    <div className='w-5/6'>
                    <div className="gap-x-[75px] flex">
                    <h2 className='text-2xl font-semibold font-dm text-white'>PUBG MOBILE BATTLE OF THOUGHT SEASON 1</h2>
                    <h2 className='text-2xl font-semibold font-dm text-white'>GRANDFINAL M1/08</h2>
                    </div>
                    <h1 className='font-Oswald text-white text-[80px] font-bold tracking-wide'>WINNER TEAM FOCUS</h1>
                    
                    </div>
            </div>
        </nav>

        <section>
        <div className="flex justify-between">
            
            {
            data.map((item,index)=>{
                let {imageUrl,playerName,elimination,contribution} = item
            return <div key={index} className='w-[300px] relative mt-10'>
                        <div className='h-[150px]  bg-black/50'></div>
                        <div className="absolute -top-[84px] left-1/2 -translate-x-1/2 w-[350px]">
                            {/* <img src={imageUrl} alt="ManOne" /> */}
                            <img src={PubgMan} alt="" />
                        </div>
                        <h3 className='text-center bg-[green] py-2 font-dm text-white text-2xl font-semibold text-white'>{playerName}</h3>
                        <div className='bg-white'>
                            <div className="flex justify-between pt-4 px-2">
                            <button className='bg-[green] px-2 py-2 font-dm font-semibold text-white text-lg hover:bg-black duration-500 rounded-[2px]'>ELIMINATON</button>
                            <button className='bg-[green] px-2 py-2 font-dm font-semibold text-white text-lg hover:bg-black duration-500 rounded-[2px]'>CONTRIBUTION</button>
                            
                            </div>
                            <className className="flex justify-center gap-x-[130px]">
                            <h4 className='font-dm  text-2xl font-semibold text-black'>{elimination}</h4>
                            <h4 className='font-dm  text-2xl font-semibold text-black'>{contribution} </h4>
                            </className>

                        </div>
                        </div>
            })
            }
        

            </div>
        </section>

        <section className='mt-6'>
        <div className="flex justify-between">
                <div className='w-[25%] '>
                <h2 className='text-5xl bg-[green] p-4  font-semibold font-dm text-white'>TAKE IT EASY</h2>
                
                </div>
                <div className='w-[40%] '>

                <h5 className='p-4 bg-white font-dm  text-5xl font-semibold text-black'>MATCH ELIMINAION  9</h5>
                
                </div>
                <div className='w-[32%] '>
                <h5 className='bg-white  p-4 font-dm  text-5xl font-semibold text-black'>MATCH POINT  24</h5>
                </div>
            
            </div>
        </section>
    </div>     

    </div>
  )
}

export default WinerTeam