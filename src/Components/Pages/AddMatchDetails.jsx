import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Banner from '../Utilities/Banner';
import AddMatchDetailsModal from '../Utilities/AddMatchDetailsModal';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import ListItems from '../Utilities/ListItems';
import Loading from '../Utilities/Loading';

const AddMatchDetails = () => {
    const {id} = useParams(); //group stage id 
    const [groupid,setGroupid] = useState(id)
    // console.log(groupid,'stage-id')
    // get match details data and show it 
    const {data, isLoading, refetch ,error} = useQuery('match', async () => {
        const response = await fetch(`https://pubg-gaming-backend.onrender.com/matches?stage-id=${groupid}`);
        if(!response.ok){
            throw new Error("Failed to fetch match data ")
        }
        return response.json();
        
    }) 
   if(isLoading){
    return <Loading/>
   }
   if(error){
    return <div> {error.message} </div>
   }
    // console.log(data)


    return (
        <Banner> 
         <div className='flex justify-around lg:flex-row flex-col-reverse'>
            <div className='lg:w-9/12 w-full  '>
             <div className='w-full border border-dotted min-h-[80vh] max-h-fit  border-gray-700 mt-5 px-4 py-3'>
             <h3 className=' font-semibold text-3xl text-neutral-100'> Match List : </h3>
             {data?.map((matches)=> <ListItems key={matches?._id} matches={matches} refetch={refetch} > </ListItems>)}
             </div>
            </div>
            <div className='lg:w-1/5  w-11/12 mx-auto '>
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