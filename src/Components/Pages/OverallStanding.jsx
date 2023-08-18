import React, { useContext, useEffect } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import StandingTable from '../Utilities/StandingTable';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';
import Loading from '../Utilities/Loading';
import { useSearchParams } from 'react-router-dom';
import OverAllStandingTable from '../Utilities/overAllStandingTable';

const OverallStanding = () => {
    const {selectedStageId , selectedMatchId,setSelectedTournamentid, setSelectedStageId,
        setSelectedMatchId} = useContext(AuthContext)
    const {data ,error,isLoading, refetch} = useQuery('overall', fetchOverAllData); 
    
    


    const [searchParams] = useSearchParams();

    // required code for live update
    useEffect(() => {
      const tournamentId = searchParams.get('tournamentId');
      const stageId = searchParams.get('stageId');
      const matchId = searchParams.get('matchId');

      setSelectedTournamentid(tournamentId);
      setSelectedStageId(stageId);
      setSelectedMatchId(matchId);
    

      // set on localstorage
      localStorage.setItem('tournamentId', tournamentId);
      localStorage.setItem('stageId', stageId);
      localStorage.setItem('matchId', matchId);

    }, [])





  //  fetch  Tournament data 





   async function fetchOverAllData()  {
       if(selectedStageId){
        const response = await fetch(`http://localhost:8000/standings/overall?stage-id=${selectedStageId}`);
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
           {
             data &&   <OverAllStandingTable teams={data} />
           }
        
        </div>
       </DisplayLayout>
    );
};

export default OverallStanding;