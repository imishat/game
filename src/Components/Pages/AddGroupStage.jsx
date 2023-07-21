import React from 'react';
import Banner from '../Utilities/Banner';
import { FaPlus } from 'react-icons/fa';
import AddGroupStageModal from '../Utilities/AddGroupStageModal';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import ListItems from '../Utilities/ListItems';
import Loading from '../Utilities/Loading';

const AddGroupStage = () => {
    const {id} = useParams();
      // fetch data using react query 
      const {data ,error,isLoading, refetch} = useQuery('stages', fetchGroupStage);

      if(isLoading){
         return <Loading/>
      }  
 
      if(error){
         return <div> Error: {error.message} </div>
      }
   
     // fetch  Tournament data 
     async function fetchGroupStage()  {
         const response = await fetch(`http://localhost:8000/stages?tournament-id=${id}`);
         if(!response.ok){
             throw new Error('Failed to fetch  groupstage Data')
         }
         return response.json() ;
     }
    return (
       <Banner> 
         <div className='flex justify-around lg:flex-row flex-col-reverse'>
            <div className='lg:w-9/12 w-full '>
             <div className='w-full  min-h-[80vh] max-h-auto  border-gray-700 mt-5 px-4 pb-10 pt-3'>
             <h3 className=' font-semibold text-3xl text-neutral-100'> Group List : </h3>
             {data?.map((group) => <ListItems key={group?._id} groupStage={group} refetch={refetch}> </ListItems>)}
             </div>
            </div>
            <div className='lg:w-1/5  w-11/12 mx-auto'>
            <div className='mt-5'>
            <label htmlFor="add_group_stage_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Add Group  </label>
            </div>
            <AddGroupStageModal tournamentId={id}  refetch={refetch}/>
            </div>
        </div>
       </Banner>
    );
};

export default AddGroupStage;