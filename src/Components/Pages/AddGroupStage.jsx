import React, { useState } from 'react';
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
      const {data ,error,isLoading, refetch} = useQuery('stages', fetchGroupStage)
      const [currentPage,setCurrentPage] = useState(1)

       // fetch  Tournament data 
     async function fetchGroupStage()  {
        const response = await fetch(`https://pubg-gaming-backend.onrender.com/stages?tournament-id=${id}`);
        if(!response.ok){
            throw new Error('Failed to fetch  groupstage Data')
        }
        return response.json() ;
    }
      const PER_PAGE = 10 ;
      const startIndex = (currentPage - 1 ) * PER_PAGE ;
      const endIndex = startIndex + PER_PAGE ;
      const currentGroupData = data?.slice(startIndex, endIndex);
      const totalPages = Math.ceil(data?.length/PER_PAGE)

      const handleNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage (currentPage + 1)
        }
      }
      
      const handlePreviousPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1 )
        }
      }
     
     console.log(data,'data')
     console.log(currentGroupData,'crrent')
    
     if(isLoading){
        return <Loading/>
     }  

     if(error){
        return <div> Error: {error.message} </div>
     }

    return (
       <Banner> 
         <div className='flex justify-around lg:flex-row flex-col-reverse'>
            <div className='lg:w-9/12 w-full '>
             <div className='w-full  min-h-[80vh] max-h-auto  border-gray-700 mt-5 px-4 pb-10 pt-3'>
             <h3 className=' font-semibold text-3xl text-neutral-100'> Group List : </h3>
             {currentGroupData?.map((group) => <ListItems key={group?._id} groupStage={group} refetch={refetch}> </ListItems>)}
             {data?.length?
              <div className='mt-4 w-10/12 '>
              <h1 className='text-xl font-bold text-white text-center '> Page No: {currentPage} </h1>
              <div className='mt-4 flex justify-center'>
                  <button className='bg-blue-500 mr-2 px-3 py-2 rounded-lg text-white disabled:bg-gray-300' 
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  > Previous  </button>

                  <button className='bg-blue-500 mr-2 px-3 py-2 rounded-lg text-white disabled:bg-gray-300'
                   onClick={handleNextPage}
                   disabled={currentPage === totalPages}
                   > Next  </button>
              </div>
           </div>
             :
             <h2 className='text-2xl font-bold text-white text-center'> No Stage data  </h2>
             }
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