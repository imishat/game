import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const    ListItems = ({matches,groupStage,tournament,refetch}) => {
   // tournament delete items 
   const tournamentDeleteHandlar = () => {
      console.log(tournament?._id)
      fetch(`http://localhost:8000/tournaments/${tournament?._id}`,{
         method: "Delete",
         
        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
         if(data.success === true){
          toast.success(`${tournament?.name}  hasbeen deleted`)
         //  e.target.reset()
          refetch()
         //  closeButton.current.click();
         }
        })
        .catch(error => {
         console.error(error)
        })
   }

   // Delete group stage handlar 
   const groupStageDeleteHandlar = () => {
      fetch(`http://localhost:8000/stages/${groupStage?._id}`,{
         method: "Delete",
         
        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
         if(data.success === true){
          toast.success(`${groupStage?.name}  hasbeen deleted`)
         //  e.target.reset()
          refetch()
         //  closeButton.current.click();
         }
        })
        .catch(error => {
         console.error(error)
        })
   }

 // Delete matches handlar 
 const matchesDeleteHandlar = () => {
   fetch(`http://localhost:8000/matches/${matches?._id}`,{
      method: "Delete",
      
     })
     .then(res => res.json())
     .then(data => {
      console.log(data)
      if(data.success === true){
       toast.success(`${matches?.name}  hasbeen deleted`)
      //  e.target.reset()
       refetch()
      //  closeButton.current.click();
      }
     })
     .catch(error => {
      console.error(error)
     })
}





    return (
        <div>
             <div className="lg:w-10/12 w-full bg-slate-800 mt-4 grid items-center h-12 text-white rounded-sm px-4">
             {/* Matches list items section  */}
             {matches && 
            
              <div className='grid grid-cols-4 items-center text-xl '>
             {/* <img src={tournament?.logo} className='w-10 h-10 rounded-full ' /> */}
             <Link to={`/teams/${matches?._id}`} query={{'match-id':matches?._id}} className='hover:text-blue-500' > Match No: <span className='font-bold'> {matches?.matchNo} </span> </Link>
             <Link to={`/teams/${matches?._id}`} className='hover:text-blue-500' > Map: <span className='font-bold'> {matches?.chooseMap} </span> </Link> <h2 className=''> Time: <span className="font-bold"> {matches?.time} </span> </h2>
             
             <div className='flex justify-end'>
                <button className='mr-4 hover:text-red-400 hover:text-lg' onClick={matchesDeleteHandlar}> <FaTrashAlt/> </button>
                <button className='h-7 w-7 text-center rounded-full hover:bg-gray-500'> <FaPen className='mx-auto hover:text-blue-200  '/> </button>
            </div>
            </div>
             

             }
           {/* group stage listitems section  */}
        {groupStage && 
        
         <div className='grid grid-cols-5 items-center text-xl  '>
            {/* <img src={tournament?.logo} className='w-10 h-10 rounded-full ' /> */}
            
            <Link to={`/matches/${groupStage?._id}`}  query={{'group-id':groupStage?._id}}  className='text-xl font-medium cursor-pointer hover:text-blue-400 '> {groupStage?.name}  </Link>

            <Link to={`/matches/${groupStage?._id}`}  query={{'group-id':groupStage?._id}} className='text-lg col-span-2 hover:text-blue-400'> Stage Level: <span className='font-bold'>{groupStage?.name}</span> </Link> 

            <h2 className='text-lg '> Member: <span className='font-bold'> {groupStage?.match}</span> </h2>
           
            <div className='flex justify-end'>
               <button className='mr-4 hover:text-red-400 hover:text-lg' onClick={groupStageDeleteHandlar}> <FaTrashAlt/> </button>
                <button className='h-7 w-7 text-center rounded-full hover:bg-gray-500'> <FaPen className='mx-auto hover:text-blue-200  '/> </button>
           </div>
           </div>
            
        }
          
          {/* Tournament listitems section start  */}
          {tournament && 
            
            <div className='grid grid-cols-4 items-center text-xl '>
               <Link to={`/tournament/${tournament?._id}`} query={{'tournament-id':tournament?._id}} > 
               <img src={tournament?.logo} className='w-10 h-10 rounded-full cursor-pointer ' />
               </Link>
             
             <Link to={`/tournament/${tournament?._id}`} query={{'tournament-id':tournament?._id}}  className='text-xl font-medium cursor-pointer  col-span-2 hover:text-blue-400'> {tournament?.name}  </Link>
             
             <div className='flex justify-end'>
                <button className='mr-4 hover:text-red-400 hover:text-lg'  onClick={tournamentDeleteHandlar}> <FaTrashAlt/> </button>
                 <button className='h-7 w-7 text-center rounded-full hover:bg-gray-500'> <FaPen className='mx-auto hover:text-blue-200  '/> </button>
            </div>
            </div>
           
            
          }
            
        </div>
        </div>
    );
};

export default ListItems;