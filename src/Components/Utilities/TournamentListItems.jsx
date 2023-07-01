import React from 'react';
import { FaPen,  FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TournamentListItems = ({tournament}) => {
    
    return (
        <div className='text-white  '>
            <div className='w-10/12 bg-slate-700 mt-4 h-12  rounded-sm flex justify-between items-center px-4'>
            <div className='flex gap-x-6'>
             <img src={tournament?.logo} className='w-10 h-10 rounded-full ' />
             <Link to={`/tournament/${tournament?._id}`} query={{'tournament-id':tournament?._id}}   className='text-xl font-medium cursor-pointer hover:text-blue-400'> {tournament?.name}  </Link>
            </div>
            <div>
                <button className='mr-4 hover:text-red-400 hover:text-lg'> <FaTrashAlt/> </button>
                 <button className='h-7 w-7 text-center rounded-full hover:bg-gray-500'> <FaPen className='mx-auto hover:text-blue-200  '/> </button>
            </div>
            </div>
           
        </div>
    );
};

export default TournamentListItems;