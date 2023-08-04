import React, { useContext } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import StandingTable from '../Utilities/StandingTable';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';
import Loading from '../Utilities/Loading';

const OverallStanding = () => {
    const {selectedStageId , selectedMatchId} = useContext(AuthContext)
    const {data ,error,isLoading, refetch} = useQuery('overall', fetchOverAllData);  
  //  fetch  Tournament data 
   async function fetchOverAllData()  {
       if(selectedStageId){
        const response = await fetch(`https://pubg-gaming-backend.onrender.com/standings/overall?stage-id=${selectedStageId}`);
       if(!response.ok){
           throw new Error('Failed to fetch  overall data')
       }
       refetch()
       return response.json() ;
       }
   }
   if(isLoading){
    return <Loading/>
   }

   console.log(data,'over')
    return (
       <DisplayLayout>
        <div>
            {/* <h1 className='text-4xl  text-center '> Overall Standing </h1> */}
            <StandingTable teams={data} />
        </div>
       </DisplayLayout>
    );
};

export default OverallStanding;