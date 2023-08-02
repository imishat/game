import React, { useEffect, useState } from 'react';
import Banner from '../Utilities/Banner';
import AddTournamentModal from '../Utilities/AddTournamentModal';
import { FaPlus } from 'react-icons/fa';
import { useQuery } from 'react-query';
import ListItems from '../Utilities/ListItems';
import Loading from '../Utilities/Loading';

const AddTournament = () => {
    // const {tournaments} =  useContext()
  // fetch data using react query 
    const {data ,error,isLoading, refetch} = useQuery('tournaments',fetchTournament);
    const [currentPage, setCurrentPage] = useState(1);
  
  
    // fetch  Tournament data 
    async function fetchTournament()  {
        const response = await fetch(`http://localhost:8000/tournaments`);
        if(!response.ok){
            throw new Error('Failed to fetch  tournament Data')
        }
        return response.json() ;
    }

    const ITEMS_PER_PAGE = 10;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
  
    const currentData = data?.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE);
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(currentPage)
    if(isLoading){
      return <Loading/>
   }  

   if(error){
      return <div> Error: {error.message} </div>
   }
    return (
        <Banner> 
        <div className='flex justify-around lg:flex-row flex-col-reverse  '>
           <div className=' lg:w-9/12 w-full '>
            <div className='w-full  min-h-[80vh] max-h-auto  border-gray-700 mt-5 px-4 pt-3 pb-10'>
            <h3 className=' font-semibold text-3xl text-neutral-100'> Tournament List : </h3>
              {currentData?.map((tournament) =>  <ListItems key={tournament._id} tournament={tournament} refetch={refetch} className='text-white'/>  )}
          
             {data?.length? 
              <div className=" mt-4 lg:w-10/12">
              <h1 className='text-xl font-bold text-white text-center'> Page  No: {currentPage} </h1>
             <div className='flex justify-center mt-4 '>
             <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="mr-2 px-3 py-2 rounded-lg bg-red-800 cursor-pointer text-white disabled:bg-gray-400"
              >
                Previous
              </button>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-5 py-2 rounded-lg bg-red-800 cursor-pointer text-white disabled:bg-gray-400" >
            Next
          </button>
             </div>
            </div>
              : 
              <h2 className='text-2xl font-bold text-white '> No Tournament data </h2>
            }
            </div>
           </div>

           <div className='lg:w-1/5 w-11/12 mx-auto '>
           <div className='mt-5'>
           <label htmlFor="add_tournament_modal" className="btn-style bg-linear-red flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Add Tournament </label>
           </div>
           <AddTournamentModal refetch={refetch}/>
           </div>
       </div>
      </Banner>
    );
};

export default AddTournament;

