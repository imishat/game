import React, { useState } from 'react';
import '../../assets/Style/CardStyle.css'
import '../../assets/Style/BackgroundStyle.css'
import '../../assets/Style/style.css'
import Logo from  '../../assets/images/background/gaming-logo.png'
const TopFraggerCard = ({bestPlayers,selectedMatchId,playerData,team,  players}) => {
   
    const sortPlayers = bestPlayers?.sort((a, b) => b?.kills[selectedMatchId] - a?.kills[selectedMatchId] ) 
   

    return (
      <div className='mt-10'>
      {/* Title */}
     
    {/* Cards */}
   
   <div className="flex justify-around w-full">
      { sortPlayers &&
          sortPlayers?.slice(0,3)?.map(bestPlayer=>{
              return(
                  <div key={bestPlayer?._id} className="w-[350px] relative bg-[#0F1316]">
                  <div className="h-[220px] ">
                      <img src={bestPlayer?.playerImg} className="z-40 absolutly h-[220px]  border-2 border-slate-300 w-full mx-auto " alt="" />
                     
                  </div>
                  <div className="bg-[#141EF2] text-white">
                      <h2 className="uppercase font-pop text-[16px] text-center"> {bestPlayer?.name || 'unknown'}  </h2>
                  </div>
                  <div className="text-[22px] font-pop flex justify-between py-3 text-white px-4 bg-gradient-to-r from-[#0F1316] to-[#141EF2]">
                      <p>Finishes</p>
                      <p> {bestPlayer?.kills[selectedMatchId] || 0  }  </p>
                  </div>
                  <div  className="font-pop text-[22px] flex justify-between px-2 bg-gradient-to-r from-[#141EF2] text-white py-3 to-[#0F1316]">
                  <p>CONGRATULATION</p>
                  <p>{bestPlayer?.contribution ? bestPlayer.contribution.toFixed(2) : 0}%</p>

                  </div>
              </div>
              )
          })
      }

      {players && 
        players?.slice(0,3)?.map(bestPlayer=>{
            return(
                <div key={bestPlayer?._id} className="w-[360px] relative bg-[#0F1316]">
                <div className="h-[220px] ">
                    <img src={bestPlayer?.playerImg} className="z-40 absolutly h-[220px]  border-2 border-slate-300 w-full mx-auto " alt="" />
                   
                </div>
                <div className="bg-[#141EF2] text-white">
                    <h2 className="font-pop uppercase text-[26px] text-center"> {bestPlayer?.name || 'unknown'}  </h2>
                </div>
                <div className="font-pop text-[28px] flex justify-between py-3 text-white px-4 bg-gradient-to-r from-[#0F1316] to-[#141EF2]">
                    <p>Finishes</p>
                    <p> {bestPlayer?.totalKills || 0  }  </p>
                </div>
                <div  className="font-pop text-[22px] flex justify-between px-2 bg-gradient-to-r from-[#141EF2] text-white py-3 to-[#0F1316]">
                    <p>CONGRATULATION</p>
                    <p>{bestPlayer?.contribution ? bestPlayer.contribution.toFixed(2) : 0}%</p>

                </div>
            </div>
            )
        })
      }
     
    </div>
   </div>
  
        
    );
};

export default TopFraggerCard;


