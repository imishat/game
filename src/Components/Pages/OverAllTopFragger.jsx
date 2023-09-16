import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import DisplayLayout from '../../Layout/DisplayLayout';
import Loading from '../Utilities/Loading';
import LogoSection from '../Utilities/LogoSection';
import TopFraggerCard from '../Utilities/TopFraggerCard';
import axios from 'axios';

const OverAllTopFragger = () => {
  const {selectedTournamentId,  selectedMatchId , selectedStageId,setSelectedTournamentid, setSelectedStageId,
    setSelectedMatchId} = useContext(AuthContext)
 
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

  
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
    if (selectedStageId) {
      setLoading(true);
      axios
        .get(`http://localhost:8000/standings/overall-topfragger?groupId=${selectedStageId}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }

  }, [searchParams,
    setSelectedMatchId,
    setSelectedStageId,
    setSelectedTournamentid,
    selectedStageId,])





//  sort data largest kills to 

    return (
      <DisplayLayout>  
       
        {/* bg frame right */}
        
        {/* bg image */}

         
       
         {/* Logo section */}
         <LogoSection   />
         {/* Card section */}
         <TopFraggerCard  players={data}  />
      
   
      </DisplayLayout>
    );
};

export default OverAllTopFragger;