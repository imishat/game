import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import DisplayLayout from '../../Layout/DisplayLayout';
import Loading from '../Utilities/Loading';
import LogoSection from '../Utilities/LogoSection';
import TopFraggerCard from '../Utilities/TopFraggerCard';

const OverAllTopFragger = () => {
  const {selectedTournamentId,  selectedMatchId , selectedStageId,setSelectedTournamentid, setSelectedStageId,
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

  }, [searchParams,setSelectedMatchId,setSelectedStageId,setSelectedTournamentid])


//  fetch  Tournament data 
 async function fetchOverAllData()  {
     if(selectedTournamentId){
      const response = await fetch(`http://localhost:8000/standings/overall-topfragger?groupId=${selectedStageId}`)
      
     if(!response.ok){
         throw new Error('Failed to fetch  overall data')
     }
     refetch()
     return response.json() ;
     }
 }


// console.log(data)
 if(isLoading){
  return <Loading/>
}  

if(error){
  return <div> Error: {error.message} </div>
}

//  sort data largest kills to 

    return (
      <DisplayLayout>  
         <div className="w-full relative  mx-auto">
        {/* bg frame right */}
        <img
          className="absolute right-0"
          src=""
        />
        {/* bg image */}
        <div
          className={``}
        >
         {/* Logo section */}
         <LogoSection   />
         {/* Card section */}
         <TopFraggerCard  players={data}  />
        </div>
      </div>
      </DisplayLayout>
    );
};

export default OverAllTopFragger;