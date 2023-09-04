import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import StandingTable from '../Utilities/StandingTable';
import { AuthContext } from '../../Context/AuthProvider';

import { useSearchParams } from 'react-router-dom';
import OverAllStandingTable from '../Utilities/overAllStandingTable';
import axios from 'axios';

const OverallStanding = () => {
    const {selectedStageId , selectedMatchId,setSelectedTournamentid, setSelectedStageId,
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
          .get(`http://localhost:8000/standings/overall?stage-id=${selectedStageId}`)
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





  /

   console.log(data,'over')
    return (
       <DisplayLayout>
        <div>
           
           {
             data &&   <OverAllStandingTable teams={data} />
           }
        
        </div>
       </DisplayLayout>
    );
};

export default OverallStanding;