import React, { useEffect, useState } from 'react';
import Banner from '../Utilities/Banner';
import AddTournamentModal from '../Utilities/AddTournamentModal';
import { FaPlus } from 'react-icons/fa';
import { useQuery } from 'react-query';
import MatchListItems from '../Utilities/MatchListItems';

const AddTournament = () => {
    
  // fetch data using react query 
    const {data ,error,isLoading, refetch} = useQuery('tournaments',fetchTournament);

     if(isLoading){
        return <div> Loading ... </div>
     }  

     if(error){
        return <div> Error: {error.message} </div>
     }
  
    // fetch  Tournament data 
    async function fetchTournament()  {
        const response = await fetch(`http://localhost:8000/tournaments`);
        if(!response.ok){
            throw new Error('Failed to fetch  tournament Data')
        }
        return response.json() ;
    }

    return (
        <Banner> 
        <div className='flex justify-around'>
           <div className='w-9/12 '>
            <div className='w-full border border-dotted h-[80vh] overflow-y-scroll border-gray-700 mt-5 px-4 pt-3 pb-10'>
            <h3 className=' font-semibold text-3xl text-neutral-100'> Tournament List : </h3>
        
              {data?.map((tournament) =>  <MatchListItems key={tournament._id} tournament={tournament} className='text-white'/>  )}
               
            </div>
           </div>
           <div className='w-1/5 '>
           <div className='mt-5'>
           <label htmlFor="add_tournament_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Add Tournament </label>
           </div>
           <AddTournamentModal refetch={refetch}/>
           </div>
       </div>
      </Banner>
    );
};

export default AddTournament;

