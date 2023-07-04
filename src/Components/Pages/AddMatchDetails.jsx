import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Banner from '../Utilities/Banner';
import AddMatchDetailsModal from '../Utilities/AddMatchDetailsModal';
import { useParams } from 'react-router';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import ListItems from '../Utilities/ListItems';

const AddMatchDetails = () => {
    const {id} = useParams(); //group stage id 
    const [groupid,setGroupid] = useState(id)
    // get match details data and show it 
    const {data, isLoading, refetch ,error} = useQuery('match', async () => {
        const response = await fetch(`http://localhost:8000/matches?stage-id=${groupid}`);
        if(!response.ok){
            throw new Error("Failed to fetch match data ")
        }
        return response.json();
        
    }) 
   if(isLoading){
    return <div> Loading ...</div>
   }
   if(error){
    return <div> {error.message} </div>
   }
    console.log(data)


    return (
        <Banner> 
         <div className='flex justify-around'>
            <div className='w-9/12 '>
             <div className='w-full border border-dotted min-h-[80vh] max-h-fit  border-gray-700 mt-5 px-4 py-3'>
             <h3 className=' font-semibold text-3xl text-neutral-100'> Match List : </h3>
             {data?.map((matches)=> <ListItems key={matches?._id} matches={matches} > </ListItems>)}
             </div>
            </div>
            <div className='w-1/5 '>
            <div className='mt-5'>
            <label htmlFor="add_match_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Add Match  </label>
            </div>
            <AddMatchDetailsModal stageid={groupid} refetch={refetch} />
            </div>
        </div>
       </Banner>
    );
};

export default AddMatchDetails;