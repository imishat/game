import React, { useContext} from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Utilities/Loading';
import { useQuery } from 'react-query';
import OverallTable from '../Utilities/overallTable';
import TopFraggerCard from '../Utilities/TopFraggerCard';

const OverAllTopFragger = () => {
  const {selectedTournamentId,  selectedMatchId , selectedStageId} = useContext(AuthContext)
  const {data ,error,isLoading, refetch} = useQuery('overall', fetchOverAllData);
  if(isLoading){
     return <Loading/>
  }  

  if(error){
     return <div> Error: {error.message} </div>
  }

//  fetch  Tournament data 
 async function fetchOverAllData()  {
     if(selectedTournamentId){
      const response = await fetch(`http://localhost:8000/standings/overall?tournament-id=${selectedTournamentId}`);
     if(!response.ok){
         throw new Error('Failed to fetch  overall data')
     }
     refetch()
     return response.json() ;
     }
 }

 
 const sortPlayers = data?.sort((a, b) => b?.kills - a?.kills ) 
  
//  console.log(sortPlayers)
// console.log(data,'')
    return (
      <DisplayLayout>  
          <div className='bg-orange-100'>
           <section className='  '>
            {/* Left side  */}
          <div className=''>
          <div className='py-2 w-11/12 bg-linear-rose mx-auto px-4 text-white   '>
           <h1 className='text-4xl text-center font-bold uppercase '> Star Of the <span className='text-yellow-500'> Group  </span> </h1>
           
           </div>

           <div>
            {/* <h1 className='font-bold text-2xl text-center text-red-500'> </h1> */}
           <div className='grid grid-cols-3 gap-y-6 justify-between py-5 w-11/12 mx-auto'>
                {sortPlayers?.slice(0,3).map((player) => <TopFraggerCard key={player?._id} playerData={player}  > </TopFraggerCard>)}
            </div>
           </div>
          </div>

          {/* right side  */}
          <div className='columns-1  bg-orange-50'>

          </div>

           </section>
           
            </div>
      </DisplayLayout>
    );
};

export default OverAllTopFragger;