import React from 'react'
import Schediul from '../../data/sheule'
import LogoPubg from "../../assets/images/images/logoPabg.png"
import Car from "../../assets/images/images/carFour.jpg"

function PubgMatchTime() {
  return (
    <div className='bg-[teal] h-screen'>
     <div className='max-w-container mx-auto'>
    <nav className=' py-4'>
      <div className="flex gap-x-20 items-center">
            <div className='w-1/6'>
            <img src={LogoPubg} alt="" />
            </div>
            <div className='w-5/6'>
            <div className=" flex gap-x-[75px]">
              <h2 className='text-2xl font-semibold font-dm text-white'>PUBG MOBILE BATTLE OF THOUGHT SEASON 1</h2>
              <h2 className="bg-[green] px-4 py-2 text-2xl font-semibold font-dm text-white">GRANDFINAL M1/08</h2>
            </div>
            <h1 className='font-Oswald text-white text-[80px] font-bold tracking-[10px]'>TODAYS   SCHEDULE</h1>
            </div>
    </div>
   </nav>

    <div className="flex justify-between">

{
    Schediul.map((item)=>{
   let {imageUrl,match,tittle,time} = item
return <div className='w-[300px]'>
     <div className='w-full bg-[green]  py-4 text-center hover:bg-white duration-500 group'> 
     <h2 className="group-hover:text-black text-2xl font-semibold font-dm text-white">{match}</h2>
   </div>
    <div className='relative'>
    {/* <img src={imageUrl} alt="" /> */}
    <img src={Car} alt="" />
    <div className='flex justify-center items-end bg-black/30 h-full w-full absolute top-0 left-0'>
       <h3 className="font-dm text-white text-2xl font-semibold text-white pb-4">{tittle}</h3>
    </div>
    </div>
   <div className='w-full bg-gray-600 py-2 text-center hover:bg-black duration-500 group'> 
     <h2 className=' font-dm  font-extrabold text-3xl text-[black] group-hover:text-white'>{time}</h2>
   </div>
  </div>
   
   })
}

    </div>
    </div>
    </div>
  )
}

export default PubgMatchTime