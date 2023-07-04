import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ListItems = ({matches,groupStage,tournament}) => {
    return (
        <div>
             <div className='w-10/12 bg-slate-700 mt-4 grid items-center h-12 text-white rounded-sm px-4'>
             {/* Matches list items section  */}
             {matches && 
             <div className='grid grid-cols-4 items-center text-xl '>
             {/* <img src={tournament?.logo} className='w-10 h-10 rounded-full ' /> */}
             <Link to={`/teams/${matches?._id}`} query={{'match-id':matches?._id}} className='' > Match No: <span className='font-bold'> {matches?.matchNo} </span> </Link>
             <Link to={`/teams/${matches?._id}`} className='' > Map: <span className='font-bold'> {matches?.chooseMap} </span> </Link>              <h2 className=''> Time: <span className="font-bold"> {matches?.time} </span> </h2>
             <div className='flex justify-end'>
                <button className='mr-4 hover:text-red-400 hover:text-lg'> <FaTrashAlt/> </button>
                <button className='h-7 w-7 text-center rounded-full hover:bg-gray-500'> <FaPen className='mx-auto hover:text-blue-200  '/> </button>
            </div>
            </div>

             }
           {/* group stage listitems section  */}
        {groupStage && 
           <div className='grid grid-cols-5 items-center text-xl'>
            {/* <img src={tournament?.logo} className='w-10 h-10 rounded-full ' /> */}
            <Link to={`/matches/${groupStage?._id}`} query={{'group-id':groupStage?._id}}   className='text-xl font-medium cursor-pointer hover:text-blue-400 '> {groupStage?.name}  </Link>
            <h2 className='text-lg col-span-2'> Stage Level: <span className='font-bold'>{groupStage?.name}</span> </h2> 
            <h2 className='text-lg '> Match Member: <span className='font-bold'> {groupStage?.match}</span> </h2>
            <div className='flex justify-end'>
               <button className='mr-4 hover:text-red-400 hover:text-lg'> <FaTrashAlt/> </button>
                <button className='h-7 w-7 text-center rounded-full hover:bg-gray-500'> <FaPen className='mx-auto hover:text-blue-200  '/> </button>
           </div>
           </div>
           
        }
          
          {/* Tournament listitems section start  */}
          {tournament && 
            <div className='grid grid-cols-4 items-center text-xl'>
             <img src={tournament?.logo} className='w-10 h-10 rounded-full ' />
             <Link to={`/tournament/${tournament?._id}`} query={{'tournament-id':tournament?._id}}   className='text-xl font-medium cursor-pointer hover:text-blue-400 col-span-2'> {tournament?.name}  </Link>
             <div className='flex justify-end'>
                <button className='mr-4 hover:text-red-400 hover:text-lg'> <FaTrashAlt/> </button>
                 <button className='h-7 w-7 text-center rounded-full hover:bg-gray-500'> <FaPen className='mx-auto hover:text-blue-200  '/> </button>
            </div>
            </div>
            
          }
            
        </div>
        </div>
    );
};

export default ListItems;