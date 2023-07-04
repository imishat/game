import React, { useEffect, useState } from 'react';
import { FaCaretDown, FaMinus, FaPen, FaPlus, FaTrashAlt } from 'react-icons/fa';

const TeamKillsCard = ({team, matchId}) => {
    const { logo, name, tag, players} = team ;
    const [kills,setlKills]  = useState({})  
    const [totalKills,setTotalKills] = useState(0);

    // Increase or decrease kills  value  
    useEffect(() => {
      if(players.length){
        const playerKills = {} 
        players.forEach((player) => playerKills[player._id] = player[matchId ] || 0)
        setlKills(playerKills);
      }
    },[players])
    
    // Total kills value  
    useEffect(() => {
      let total = 0 
      Object.keys(kills).forEach((kill) => total+=kills[kill] )
      setTotalKills(total)
      // console.log(total)
    },[kills])

    // Send kills value in database 
   function sendKills(playerId,kill)  {
      fetch(`http://localhost:8000/matches/kills`, {
        method: 'Post',
        headers :  {
          'Content-type':  'application/json'
        },
        body: JSON.stringify({'match-id':matchId,'player-id':playerId, kills:kill})
      })
      .then(res =>  res.json())
      .then(data => {
        console.log(data)
      })
      
   }   


   console.log(players)
    return (
        <div className='text-white  mx-auto '>
        <div className="card rounded-md animated-background border-yellow-300 border shadow-small h-auto lg:w-96 w-96 md:w-80 mt-6" >
          {/* top section  */}
          <div className='flex justify-between'>
          <img src={logo} alt="Shoes" className='w-24 h-24 rounded-sm ' />
         <div className='mt-2'>
            <h1 className='text-lg font-medium'> Team  Name: {name} </h1>
            <h1 className='text-lg font-medium'> Team Tag: {tag} </h1>
         </div>
          <div className='p-2 flex flex-col'>
            <button className='w-8 h-8 border rounded-full hover:bg-gray-600 hover:text-red-500  '> <FaTrashAlt className='mx-auto'/> </button>
            <button className='w-8 h-8 border rounded-full hover:bg-gray-600 hover:text-blue-500 mt-2'> <FaPen className='mx-auto'/> </button>
          </div>
          </div>
        
          <div className="card-body mt-0">
            <h2 className="card-title">
              Players <FaCaretDown/>
            </h2>
             <div className='w-full'>
                {players?.map((player)=> (
                <div key={player?._id} className='grid grid-cols-5 gap-x-2 mt-2 '>
                  <img src={player?.playerImg} className='w-10 h-10  rounded-full'/>  
                  <span className='text-xl col-span-2  '> {player?.name} </span> 
                  <div className='flex justify-between gap-1 items-center  '> 

                  <button className='border  h-6 hover:text-rose-500 ' onClick={()=> {
                    const oldKills = structuredClone(kills)
                    oldKills[player._id] -=1
                    setlKills(oldKills) 
                    sendKills (player._id,kills[player._id] -1)
                   }}> <FaMinus/> </button>
                   <span className='w-10 h-6  bg-white text-black text-center'> { kills[player._id]} </span> 
                   <button className="border h-6 hover:text-blue-400 " onClick={()=> {
                    const oldKills = structuredClone(kills)
                    oldKills[player._id] +=1
                    setlKills(oldKills) 
                     sendKills (player._id,kills[player._id] +1)
                   } }> <FaPlus/> </button>

                   </div>
                 <div className=' flex  items-center gap-x-2'> <input type='checkbox' className='checkbox-xs' name='dead'  /> <span> Dead</span> 
                 </div> 
                 </div>))}
                </div>


             {/* divider  */}
             <div className='w-full h-[2px]  bg-slate-300'>  </div>
             {/* calculate section   */}
             <div className='text-2xl font-semibold text-center'>
              <h1>Total Kills  = {totalKills} </h1>
              <h1> Rank Points = 0 </h1>
              <h1> Total Points = 0 </h1>
             </div>
           </div>
         </div>
        </div>
    );
};

export default TeamKillsCard;