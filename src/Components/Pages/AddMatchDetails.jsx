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
    const [currentPage, setCurrentPage] = useState(1)

    // get match details data and show it 
    const {data, isLoading, refetch ,error} = useQuery('match', async () => {
        const response = await fetch(`http://localhost:8000/matches?stage-id=${groupid}`);
        if(!response.ok){
            throw new Error("Failed to fetch match data ")
        }
        return response.json();
        
    }) 

    // Pagination data per page 10 items 
    const PER_PAGE_ITEM = 10 ;
    const startIndex = (currentPage - 1) * PER_PAGE_ITEM ;
    const endIndex  = startIndex  +  PER_PAGE_ITEM ;
    const currentData = data?.slice(startIndex , endIndex);
    const totalPages = Math.ceil(data?.length / PER_PAGE_ITEM)

    const previousPageHandlar = () => {
        if(currentPage > 1 ){
            setCurrentPage(currentPage - 1 )
        }
    }

    const nextPageHandlar = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }


   if(isLoading){
    return <Loading/>
   }
   if(error){
    return <div> {error.message} </div>
   }
   


    return (
        <Banner> 
         <div className='flex justify-around lg:flex-row flex-col-reverse'>
            <div className='lg:w-9/12 w-full  '>
             <div className='w-full  min-h-[80vh] max-h-auto  border-gray-700 mt-5 px-4 py-3'>
             <h3 className=' font-semibold text-3xl text-neutral-100'> Match List : </h3>
             {currentData?.map((matches)=> <ListItems key={matches?._id} matches={matches} refetch={refetch} > </ListItems>)}
             
             {data?.length? 
              <div className=" mt-4 lg:w-10/12">
              <h1 className='text-xl font-bold text-white text-center'> Page  No: {currentPage} </h1>
             <div className='flex justify-center mt-4'>
             <button
                onClick={previousPageHandlar}
                disabled={currentPage === 1}
                className="mr-2 px-3 py-2 rounded-lg bg-blue-500 text-white disabled:bg-gray-300"
              >
                Previous
              </button>
              <button
                onClick={nextPageHandlar}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg bg-blue-500 text-white disabled:bg-gray-300"
          >
            Next
          </button>
             </div>
            </div>
              : 
              <h2 className='text-2xl font-bold text-white '> No Match Data </h2>
            }
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