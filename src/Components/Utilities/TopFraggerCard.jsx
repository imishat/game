import React from 'react';
import '../../assets/Style/CardStyle.css'
import '../../assets/Style/BackgroundStyle.css'
const TopFraggerCard = ({fragger}) => {
    return (
        <div id='animated-background' className='mx-auto px-4 py-3  fragger-card text-black'>
          
          <img src={fragger?.photo} className='w-full h-60 mt-5' />
          <div className='w-full h-7 bg-style mt-5'>
           <h2 className='text-xl  font-semibold  text-yellow-400'> {fragger?.name} </h2>
          </div>
          <h1 className='text-2xl font-semibold text-white'>Name: {fragger?.name} </h1>
          <h1 className='text-2xl font-semibold text-white'>Kills: {fragger?.kills} </h1>
          </div>
           
        
    );
};

export default TopFraggerCard;