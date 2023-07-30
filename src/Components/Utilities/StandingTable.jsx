import React, { useContext, useEffect, useState } from 'react';
import '../../assets/Style/style.css'
import '../../assets/Style/Table.css'


const StandingTable = ({tournamentData, matchData, stageData,  teamData,  selectedMatchId, selectedStageId, teams,selectedMatchData}) => {
  // get maxpoints team 
  const teamArray = teams?.map(item => item?.points[selectedMatchId])
  const maxPoints = Math.max(...teamArray);
  const bestTeam = teams?.find(x => x?.points[selectedMatchId] === maxPoints)
  
  
  // sort data by points max to  min 
  const sortTeams = teams?.sort((a, b) => b?.points?.[selectedMatchId] - a?.points?.[selectedMatchId] ) 

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
  const PER_PAGE_ITEM = 2 ;
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

  


const number  = [ 10, 20, 20, 40, 50]
const calculate = (numbers) => {
  return numbers?.reduce((a , b) => a + b  ,  0)
} 
const [sum , setSum ] = useState(calculate(number))

    return (
        <div>
            <div className='bg-linear-rose h-auto pb-3 lg:px-4 '>
                {/* Top section  */}
              <section className='grid lg:grid-cols-4 grid-cols-1'>
              
               <div className='col-span-1 border-none mb-2 mt-2 mx-auto flex lg:gap-x-0 gap-x-4'>
               <img src={tournamentData?.logo} className='lg:w-28 lg:h-24 w-20  h-20 '/>
               <div className='lg:hidden flex flex-col-reverse items-start'>
                  <h1 className='lg:text-4xl text-2xl text-center font-semibold '> <span className='text-yellow-400'> {stageData?.name} </span>:  {selectedMatchData?.matchNo} / {matchData?.length} </h1>
                  <h1 className='lg:text-4xl text-2xl  text-center uppercase font-semibold text-yellow-400'> {tournamentData?.name}   </h1>
                  </div>
              </div>
             
                
                <div className='lg:col-span-3 col-span-1  px-2'>
                  <div className='lg:flex xl:flex hidden lg:justify-between justify-around flex-row-reverse'>
                  <h1 className='lg:text-4xl text-2xl text-center font-semibold '> <span className='text-yellow-400'> {stageData?.name} </span>:  {selectedMatchData?.matchNo} / {matchData?.length} </h1>
                  <h1 className='lg:text-4xl text-2xl  text-center uppercase font-semibold text-yellow-400'> {tournamentData?.name}   </h1>
                  </div>
                  <h1 className='lg:text-5xl text-3xl  font-bold uppercase text-white lg:text-start text-center lg:mb-0 mb-2'> Match Standing  </h1>
                </div>
              </section>
              
              {/* best  Team section left side   */}
              <section className='grid lg:grid-cols-3  lg:gap-x-4'>
                {/* Who is best team in the match  */}
                <div className='col-span-1'>
                <div className='mx-auto w-full relative' >
                         
                <div className='bg-thin-rose lg:w-full lg:h-96 bottom-0 w-11/12 mx-auto'
                    style={{clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",}}>
                  <div className='h-[40vh]  flex  '>
                {/* { teamData.sort(a, b)=> }    */}
                
                {(bestTeam?.players?.slice(0,4)?.map((img) => <div key={img?._id}
                className='w-full lg:h-[20vh] h-[20vh] mt-20'
                >
                <img key={img?._id}
                     style={{position:"absolute",zIndex:1}}
                      className='w-28 h-[25vh] '
                      src={img?.playerImg}
                      alt="" />
                </div>))}
                 
                 </div>

                 <div className='lg:h-[10vh] h-[8vh] '>
                   <div style={{fontFamily:'teko'}} className='text-3xl font-bold  h-full flex justify-around items-center bg-rose'> <img src={bestTeam?.logo} className='w-10 h-10 rounded-lg' />  {bestTeam?.name} </div>
                 </div>
                    {/* <h1 className='text-white'> {teamData?.[1]?.points[selectedMatchId]} </h1> */}

                  
                </div>
                 
                <div className='bg-thin-rose px-2 py-1 lg:w-full w-11/12 mx-auto mt-[1px]'
                    style={{height:"67px",fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"space-between",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}>Place <span className='text-2xl'> 0 </span> </h2> 
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}> Rank Pts <span className='text-2xl'> 0 </span>  </h2> 
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}> Elims <span className='text-2xl'> 0 </span> </h2> 
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}> Total Pts <span className='text-2xl'> {bestTeam?.points[selectedMatchId]} </span> </h2> 
                </div>
               </div>
             </div>


                {/* Show other team in  table   */}
           <div className='  lg:col-span-2 col-span-1 px-2'>
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
					<td className="border-grey-light border hover:bg-gray-100 p-3">J </td>
					<td className="border-grey-light border hover:bg-gray-100 p-3">J </td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 "></td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 "> {team?.points[selectedMatchId]} </td>
				</tr>
      )}
			
      </tbody>
     </table>
         {sortTeams?.length? 
              <div className=" mt-4 lg:w-10/12">
              <h1 className='text-xl font-bold text-white text-center'> Page  No: {currentPage} </h1>
             <div className='flex justify-center mt-4'>
             <button
                onClick={previousPageHandlar}
                disabled={currentPage === 1}
                className="mr-2 px-3 py-2 rounded-lg bg-rose cursor-pointer disabled:hover:text-white hover:text-slate-300 text-white disabled:bg-gray-400"
              >
                Previous
              </button>
              <button
                onClick={nextPageHandlar}
                disabled={currentPage === totalPages}
                className="px-6 py-2 rounded-lg hover:text-slate-300 disabled:hover:text-white bg-rose cursor-pointer text-white disabled:bg-gray-400"
          >
            Next
          </button>
             </div>
            </div>
              : 
              <h2 className='text-2xl font-bold text-white '> No Tournament data </h2>
            }
    </div>
    </div>
        {/* large device table show end  */}


        {/* small device show table  */}
        {Array.isArray(currentData) && currentData?.map((team) => 
         <div key={team?._id} className=' lg:hidden w-full rounded-lg bg-rose mx-auto grid grid-cols-3 mt-6'>
          <div className='col-span-1'>
            <div className=' w-full border bg-rose text-white text-start h-10 px-3 rounded-tl-lg'> Rank  </div>
            <div className=' w-full border bg-rose text-white text-start h-10 px-3'> Team Name </div>
            <div className=' w-full border bg-rose text-white text-start h-10 px-3'> Place  </div>
            <div className=' w-full border bg-rose text-white text-start h-10 px-3'> Rank  Pts  </div>
            <div className=' w-full border bg-rose text-white text-start h-10 px-3'> Elims  </div>
            <div className=' w-full border bg-rose text-white text-start h-10 px-3 rounded-bl-lg'> Total Pts   </div>
          </div>
          
          <div className='col-span-2 '>
            <div className='w-full border bg-slate-50 text-slate-900 font-semibold text-start h-10 px-3 rounded-tr-lg'>  {team?.rank} </div>
            <div className='w-full border bg-slate-50 text-slate-900 font-semibold text-start h-10 px-3'>  {team?.name} </div>
            <div className='w-full border bg-slate-50 text-slate-900 font-semibold text-start h-10 px-3'>  0 </div>
            <div className='w-full border bg-slate-50 text-slate-900 font-semibold text-start h-10 px-3'>  0 </div>
            <div className='w-full border bg-slate-50 text-slate-900 font-semibold text-start h-10 px-3'>  0  </div>
            <div className='w-full border bg-slate-50 text-slate-900 font-semibold text-start h-10 px-3 rounded-br-lg'>  {team?.points[selectedMatchId]} </div>
            
          </div>
         </div>
        )}
             </div>
           </section>
           </div>
        </div>
    );
};

export default StandingTable;





