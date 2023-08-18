import React, { useContext, useEffect, useState } from 'react';
import '../../assets/Style/style.css'
import '../../assets/Style/Table.css'


const OverAllStandingTable = ({tournamentData,  stageData,  teamData,  selectedStageId, teams,}) => {
 
  // sort data by points max to  min 
  const sortTeams = teams?.sort((a, b) => b?.points - a?.points ) 

  let pointTable = {
    1: 10,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 1,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,
    "": 0,
  };

  const [currentPage ,setCurrentPage]  = useState(1)
  const PER_PAGE_ITEM = 10 ;
  const startIndex =  (currentPage - 1) * PER_PAGE_ITEM ;
  const endIndex = startIndex + PER_PAGE_ITEM ;
  const currentData = sortTeams?.slice(startIndex , endIndex);
  const totalPages = Math.ceil(sortTeams?.length / PER_PAGE_ITEM);


  const nextPageHandlar = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1 )
    }
  }

  const previousPageHandlar = () =>  {
    if(currentPage >  1) {
      setCurrentPage( currentPage - 1)
    }
  }


    return (
        <div>
            <div className='bg-linear-rose h-auto pb-6 pt-3 lg:px-4 '>
                {/* Top section  */}
             {tournamentData &&
              <section className='grid lg:grid-cols-4 grid-cols-1'>
              
              <div className='col-span-1 border-none mb-2 mt-2 mx-auto flex lg:gap-x-0 gap-x-4'>
              <img src={tournamentData?.logo} className='lg:w-28 lg:h-24 w-20  h-20 '/>
            
             </div>
            
               
               <div className='col-span-3   px-2'>
                 <div className='flex xl:flex  lg:justify-between justify-around flex-row-reverse'>
                 {/* <h1 className='text-4xl  text-center font-semibold '> <span className='text-yellow-400'> {stageData?.name} </span>:  {selectedMatchData?.matchNo} / {matchData?.length} </h1> */}
                 <h1 className='text-4xl   text-center uppercase font-semibold text-yellow-400'> {tournamentData?.name}   </h1>
                 </div>
                 <h1 className='text-5xl   font-bold uppercase text-white lg:text-start text-center lg:mb-0 mb-2'> Match Standing  </h1>
               </div>
             </section>
             }
              
              {/* best  Team section left side   */}
              <section className='grid lg:grid-cols-3  lg:gap-x-4'>
            
                {/* Show other team in  table   */}
           <div className='  w-full px-2 col-span-3'>
       <div className="hidden lg:flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white sm:hidden rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead className="text-white">
      
				<tr className="bg-rose flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left"> Rank  </th>
					<th className="p-3 text-left">  Team Name </th>
					<th className="p-3 text-left">  Place  </th>
					<th className="p-3 text-left">  Rank Pts </th>
					<th className="p-3 text-left" > Elims </th>
					<th className="p-3 text-left" > Total Pts </th>
				</tr>
			</thead>

			<tbody className="flex-1 sm:flex-none text-slate-700 font-semibold">
      {Array.isArray(currentData) && currentData?.map((team) => 
				<tr key={team?._id} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light border hover:bg-gray-100 p-3"> # {team?.rank} </td>
					<td className="border-grey-light border hover:bg-gray-100 px-3 h-8 flex justify-between items-center"> <img src={team?.logo}  className='h-8 w-8' /> {team?.name} </td>
					<td className="border-grey-light border hover:bg-gray-100 p-3">0 </td>
					<td className="border-grey-light border hover:bg-gray-100 p-3"> {pointTable[team?.rank]}  </td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 "> {team?.kills} </td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 "> {team?.points } </td>
				</tr>
      )}
			
      </tbody>
     </table>
         {sortTeams?.length? 
              <div className=" mt-4 full">
              <h1 className='text-xl font-bold text-white text-center'> Page  No: {currentPage} </h1>
             <div className='flex justify-center mt-4'>
             <button
                onClick={previousPageHandlar}
                disabled={currentPage === 1}
                className="mr-2 px-3 py-2 rounded-lg bg-rose cursor-pointer disabled:hover:text-white hover:text-slate-300 text-white disabled:bg-gray-400"
              >
               
                <span>Overall  Standing 1 </span>
                
              </button>
              <button
                onClick={nextPageHandlar}
                disabled={currentPage === totalPages}
                className="px-6 py-2 rounded-lg hover:text-slate-300 disabled:hover:text-white bg-rose cursor-pointer text-white disabled:bg-gray-400"
          >
           
            <span>  Overall  Standing 2 </span>
              
            
          </button>
             </div>
            </div>
              : 
              <h2 className='text-2xl font-bold text-white '> No Tournament data </h2>
            }
    </div>
    </div>
        {/* large device table show end  */}


       
             </div>
           </section>
           </div>
        </div>
    );
};

export default OverAllStandingTable;





