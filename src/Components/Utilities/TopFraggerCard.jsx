import React from 'react';
import "../../App.css"
const TopFraggerCard = ({ bestPlayers, selectedMatchId, players }) => {
  // Sort the best players by kills in the selected match
  const sortedPlayers = bestPlayers?.sort((a, b) => b?.kills[selectedMatchId] - a?.kills[selectedMatchId]);
  console.log(bestPlayers,"best")

  return (
    <>
    
          <div className="flex flex-wrap justify-evenly">
          {sortedPlayers &&
        sortedPlayers.slice(0, 3).map((bestPlayer) => (
            <div className="w-[408px] relative">
              {/* Player image */}
             
              <div
                style={{
                    backgroundImage: `url(${bestPlayer?.playerImg})`, // Set the background image
                    backgroundSize: "cover", // Scale the background image to cover the entire div
                    backgroundPosition: "center",
                  height: "384px",
                  width: "408px",
                  clipPath:
                    "polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",
                  backgroundColor: "rgba(0, 0, 0, 0.46)",
                }}
              ></div>

              <div
                className="h-16 font-custom flex justify-center items-center bg-[#187d5d] font-semibold"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)",
                }}
              >
                {/* Name of the player with the most kills in a match */}
                <div className="font-custom text-4xl font-semibold">
                  {bestPlayer?.name || 'unknown'}
                </div>
              </div>
              <div
                className="flex font-custom justify-evenly items-center h-24 mt-2 bg-white"
                style={{
                  clipPath:
                    "polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-1 rounded-md text-center">
                    KILLS
                  </div>
                  <div className="font-semibold text-4xl relative top-1">
                    <p>{bestPlayer?.kills[selectedMatchId] || 0}</p>
                  </div>
                </div>
                <div className="h-[70px] border border-l-2 border-black"></div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-[5px] rounded-md text-center">
                    CONTRIBUTION
                  </div>
                  <div className="font-semibold text-4xl relative top-1">
                    {bestPlayer?.contribution ? bestPlayer.contribution.toFixed(2) : 0}%
                  </div>
                </div>
              </div>
              <div
                className="flex font-custom justify-evenly items-center h-24 mt-2 bg-white"
                style={{
                  clipPath:
                    "polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-1 rounded-md text-center">
                    OVERALL RANK
                  </div>
                  <div className="font-semibold text-4xl relative top-1">0</div>
                </div>
                <div className="h-[70px] border border-l-2 border-black"></div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-[5px] rounded-md text-center">
                    OVERALL KILL
                  </div>
                  <div className="font-semibold text-4xl relative top-1">0</div>
                </div>
              </div>
            </div>  ))}
          </div>
      

      
        <div className='mt-20 flex justify-evenly' >
    {players && 
       players.slice(0, 3).map((bestPlayer) => (
        <div className='w-[408px] relative'  >
            {/* player image */}
         
            <div
                style={{
                    backgroundImage: `url(${bestPlayer?.playerImg})`, // Set the background image
                    backgroundSize: "cover", // Scale the background image to cover the entire div
                    backgroundPosition: "center",
                    height: "384px",
                    width: "408px",
                    clipPath:
                        "polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",
                    backgroundColor: "rgba(0, 0, 0, 0.46)",
                }}
            >
            </div>

            <div
                className='h-16 font-custom flex justify-center items-center bg-[#187d5d] font-semibold'
                style={{

                    clipPath:
                        " polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)",
                }}
            >
                {/* name of player 1 with most kill in a match */}
                <div className=' font-custom text-4xl font-semibold'>
                    <p> {bestPlayer?.name || 'unknown'}</p>
                </div>
            </div>
            <div
                className='flex font-custom justify-evenly items-center h-24 mt-2 bg-white'
                style={{
                    clipPath:
                        "polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",
                }}
            >
                <div className='flex flex-col justify-center items-center'      >
                    <div
                        className='text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-1 rounded-md text-center '>
                        MATCH PLAYED
                    </div>
                    <div className=' font-semibold text-4xl relative top-1'>
                        0
                    </div>
                </div>
                <div className='h-[70px] border border-l-2 border-black '></div>
                <div className='flex flex-col justify-center items-center'               >
                    <div className='text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-[5px] rounded-md text-center '>
                        CONTRIBUTION
                    </div>
                    <div className=' font-semibold text-4xl relative top-1' >
                    {bestPlayer?.contribution ? bestPlayer.contribution.toFixed(2) : 0}%
                    </div>
                </div>
            </div>
            <div
                className='flex font-custom justify-evenly items-center h-24 mt-2 bg-white'
                style={{
                    clipPath:
                        "polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",
                }}
            >
                <div className='flex flex-col justify-center items-center'      >
                    <div
                        className='text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-1 rounded-md text-center '>
                        KILL PER MATCH
                    </div>
                    <div className=' font-semibold text-4xl relative top-1'>
                        0
                    </div>
                </div>
                <div className='h-[70px] border border-l-2 border-black '></div>
                <div className='flex flex-col justify-center items-center'               >
                    <div className='text-4xl font-semibold relative bg-[#008930] w-40 h-9 top-[5px] rounded-md text-center '>
                        OVERALL KILL
                    </div>
                    <div className=' font-semibold text-4xl relative top-1' >
                    <p>{bestPlayer?.totalKills || 0}</p>
                    </div>
                </div>
            </div>
            
        </div>
       
        
         ))}
    </div>
    </>
  );
};

export default TopFraggerCard;
