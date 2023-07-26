import React from 'react';
import '../../assets/Style/CardStyle.css'
import '../../assets/Style/BackgroundStyle.css'
const TopFraggerCard = ({player,selectedMatchId,playerData}) => {
   
    return (
      <section>
        {player && 
         <div id='animated-background' className='w-11/12 mx-auto px-1 py-3  fragger-card text-black'>
          
         <img src={player?.playerImg} className='w-full h-60 mt-5' />
         <div className='w-full h-7 bg-style mt-5'>
          <h2 className='text-xl  font-semibold  text-yellow-400'> {player?.name} </h2>
         </div>
         <h1 className='text-2xl font-semibold text-white text-center'>Name: {player?.name}  </h1>
         <h1 className='text-2xl font-semibold text-white text-center'>Kills: <span className='text-yellow-500 font-bold'> {player?.kills?.[selectedMatchId]}  </span>   </h1>
         </div>
        }

        {playerData && 
         <div id='animated-background' className='w-11/12 mx-auto px-1 py-3  fragger-card text-black'>
          
         <img src={playerData?.playerImg} className='w-full  h-60 mt-5' />
         <div className='w-full h-7 bg-style mt-5'>
          <h2 className='text-xl  font-semibold  text-yellow-400'> {playerData?.name} </h2>
         </div>
         <h1 className='text-2xl font-semibold text-white text-center'>Name: {playerData?.name}  </h1>
         <h1 className='text-2xl font-bold text-white text-center'>Kills: <span className='text-yellow-500'> {playerData?.kills} </span>  </h1>
         </div>
        }
      </section>    
        
    );
};

export default TopFraggerCard;