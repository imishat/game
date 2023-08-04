import React from 'react';
import '../../assets/Style/CardStyle.css'
import '../../assets/Style/BackgroundStyle.css'
import '../../assets/Style/style.css'
import Logo from  '../../assets/images/background/gaming-logo.png'
const TopFraggerCard = ({player,selectedMatchId,playerData}) => {

  console.log(playerData,'player data ')
   
    return (
      <section>
        {player && 
         <div id='' className='w-11/12 mx-auto px-1 py-3  text-black'  >
          <div className="card w-96 bg-linear-rose  mx-auto shadow-xl " >
          <figure className="px-5 pt-5">
            <img src={player?.playerImg} alt="player image" className="rounded-xl h-60 w-full" id='player-img' />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" font-bold text-yellow-400 text-2xl h-12  bg-linear-rose-reverse  w-full rounded-md text-center"> {player?.name} </h2>
            <div className="w-full h-12 bg-linear-rose-reverse mt-0 flex items-center rounded-md justify-center">
            <h1 className='text-2xl font-semibold text-white text-center'>Finished: <span className='text-yellow-500 font-bold'> {player?.kills?.[selectedMatchId]} 
            </span> </h1>
            
            </div>
          </div>
          </div>
         </div>
        }

        {playerData && 
           <div id='' className='w-11/12 mx-auto px-1 py-3 text-black'>
           <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-5 pt-5">
             <img src={playerData?.playerImg} alt="player image" className="rounded-xl h-52 w-full" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className=" font-bold text-yellow-400 text-2xl h-12  bg-linear-rose  w-full rounded-md text-center"> {playerData?.name} </h2>
             <div className="w-full h-12 bg-linear-rose-reverse mt-0 flex items-center rounded-md justify-center">
             <h1 className='text-2xl font-semibold text-white text-center'>Finished: <span className='text-yellow-500 font-bold'> {playerData?.kills} 
             </span> </h1>
             
             </div>
           </div>
           </div>
          </div>
      
     
        }
      </section>    
        
    );
};

export default TopFraggerCard;


{/* <h1 className='text-2xl font-bold text-white text-center'>Kills: <span className='text-yellow-500'> {playerData?.kills} </span>  </h1> */}