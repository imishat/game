import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import '../../assets/Style/style.css'

const MVP = () => {
    const {selectedTournamentId,selectedStageId,selectedMatchId} = useContext(AuthContext)
    const [bestPlayer,setBestPlayer] = useState([])
    const [noData,setNoData] = useState('');
    const [playerData,setPlayerData] = useState({})
   // get best three players by match id 
useEffect(()=> {
    if(!selectedMatchId){
        setNoData("No Data, Please select tournament and match number")
      
    }else{
        const FetchThreeBestPlayers = async () => {
            try{
              const response = await fetch(`http://localhost:8000/standings/fragger?match-id=${selectedMatchId}`)
              const result = await response.json();
              setBestPlayer(result)
            //   console.log(result,'best players')
              
            }catch(error){
              console.log(error)
            }
          }
          FetchThreeBestPlayers()
    }
     
    },[selectedMatchId])
    console.log(playerData,'player')
  
    return (
       <DisplayLayout>
        <div className='bg-linear-rose pb-6 flex justify-center lg:gap-x-14 '>
            {/* left side  */}
          <div className=''>
          <div>
            <img src='' className='w-16 h-16 bg-blue-500 ml-3 ' alt='Tournament logo' />
            </div>

            <div className='leading-none text-start ml-4'>
            <h1 className='text-4xl font-bold my-0 py-0 px-2'>  Event most valueable player  </h1>
            <h1 className='lg:text-[15rem] font-bold my-0 py-0 '> MVP </h1>
            <h1 className='lg:text-4xl font-bold bg-rose py-1 lg:w-11/12 rounded-tl-[15px] px-2 '> Player Name  </h1>       
         
            <div className='bg-thin-rose lg:w-11/12 mt-4 px-2'
            style={{height:"67px", fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"start",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
            <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}> Destination </h2>
            </div>  
            </div>
          </div> 
          
          {/* right side  */}
          <div className=''>
            {bestPlayer?.slice(0,1)?.map((player) => <div key={player?._id} className='w-10/12 h-80'>
             <h1 className='text-4xl font-bold text-start'> {player?.name} </h1>
             <img src={player?.playerImg} className='w-72 h-auto bg-transparent'/>
            </div> )}
          </div>
        </div>
       </DisplayLayout>
    );
};
export default MVP;