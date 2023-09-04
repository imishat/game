import React, { useContext, useEffect, useState } from 'react'

import LogoPubg from "../../assets/images/images/logoPabg.png"
import DisplayLayout from '../../Layout/DisplayLayout'
import { AuthContext } from '../../Context/AuthProvider'
import bg from '../../assets/images/images/bg.png';
import miramar from "../../assets/images/images/miramar.jpg";
import shanok from "../../assets/images/images/shanak.jpg";
import vikendi from "../../assets/images/images/vikendi.jpg";
function Coming() {
   const {selectedMatchId} = useContext(AuthContext)
   const [nextMatch,setNextMatch]= useState({})
   console.log(selectedMatchId,"ss")
  useEffect(() => {
    fetch(`http://localhost:8000/matches/next?match-id=${selectedMatchId}`)
    .then(res => res.json())
    .then ( result  => {
      setNextMatch(result)
    })
  },[selectedMatchId])
  
  return (
   <>
   <DisplayLayout>
     <section className=' bg-[teal] pb-3'>
       <nav className='max-w-container mx-auto'>
            <div className="flex gap-x-10 items-center">
                    <div className='w-[12%]'>
                       <img src={LogoPubg} alt="" />
                    </div>
                    <div className='w-[65%]'>
                       <div className="flex gap-x-10 items-center">
                        <h2 className='text-2xl font-semibold font-pop text-white'>PUBG MOBILE BATTLE OF THOUGHT SEASON 1</h2>
                        <h2 className='bg-[green] px-4 py-1 text-2xl font-semibold font-pop text-white'>GRAND FINAL M1/08</h2>
                       </div>
                       <h1 className='font-pop font-semibold text-white text-[65px] font-extrabold tracking-wide'>COMING NEXT MAP</h1>
                        
                    </div>
                </div>
      </nav>
      {/* <div className='w-[600px]  mx-auto flex items-center  bg-cover bg-center bg-no-repeat  border border-[5px] border-white h-96 justify-center'> */}
      <img 
         //   style={{position:"absolute",zIndex:1}}
            className='w-[600px]  mx-auto flex items-center  bg-cover bg-center bg-no-repeat  border border-[5px] border-white  justify-center '
            src={
              nextMatch?.chooseMap?.toLowerCase() === "shenok"
                ? shanok
                : nextMatch?.chooseMap?.toLowerCase() === "erangel"
                ? bg
                : nextMatch?.chooseMap?.toLowerCase() === "miramar"
                ?
                miramar
                : nextMatch?.chooseMap?.toLowerCase() === "vikendi"
                ?
                vikendi
                : bg
            }
            alt="" />
    </section>
    </DisplayLayout>
   </>
  )
}

export default Coming