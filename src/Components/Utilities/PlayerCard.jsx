import React from 'react';
import '../../assets/Style/CardStyle.css'
import { FaCaretDown, FaPen, FaTrashAlt } from 'react-icons/fa';

const PlayerCard = ({players}) => {
    console.log(players,'player card ')
    return (
        <div className='text-white  mx-auto '>
        <div className="card rounded-md animated-background border-yellow-300 border shadow-small h-auto lg:w-96 w-96 md:w-80 mt-6" >
         <div className='flex justify-between '>
         <img src={players?.logo} alt="Shoes" className='w-24 h-24 rounded-sm ' />
         <div className='mt-2'>
            <h1 className='text-lg font-medium'> Team  Name: {players?.name} </h1>
            <h1 className='text-lg font-medium'> Team Tag: {players?.tag} </h1>
         </div>
          <div className='p-2 flex flex-col'>
            <button className='w-8 h-8 border rounded-full hover:bg-gray-600 hover:text-red-500  '> <FaTrashAlt className='mx-auto'/> </button>
            <button className='w-8 h-8 border rounded-full hover:bg-gray-600 hover:text-blue-500 mt-2'> <FaPen className='mx-auto'/> </button>
          </div>
         </div>
        <div className="card-body">
            <h2 className="card-title">
              Players <FaCaretDown/>
            </h2>

             <div className=''>
                {players?.players?.map((player,i)=> (<div key={player?._id} className='flex gap-x-3 mt-2'> <img src={player?.playerImg} className='w-10 h-10  rounded-full'/> <span className='text-xl '>Player - {i+1}</span> <span className='text-xl
                '> {player?.name}</span> </div>))}
             </div>
           
        </div>
        </div>
        </div>
    );
};

export default PlayerCard;