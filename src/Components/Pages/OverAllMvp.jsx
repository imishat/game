import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Utilities/Loading';
import MvpCard from '../Utilities/MvpCard';
import { useSearchParams } from 'react-router-dom';

const OverAllMvp = () => {
    const {selectedMatchId , selectedStageId,setSelectedTournamentid, setSelectedStageId, setSelectedMatchId} = useContext(AuthContext)
    const {data ,error,isLoading, refetch} = useQuery('overall', fetchOverAllData);
    const  [bestPlayer,setBestPlayer] = useState([])



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
        const response = await fetch(`http://localhost:8000/standings/overall-topfragger?groupId=${selectedStageId}`)
        if(!response.ok){
           throw new Error('Failed to fetch  overall data')
       }
       refetch()
       return response.json() ;
       }
   }
  
 
   useEffect(()=>  {
    if(data){
        const playersArr = data?.map(player => player?.totalsKills  || 0)
        const maxKills = Math.max(...playersArr)
        const BestPlayer = data?.find(x  => x?.totalKills === maxKills)
        setBestPlayer(BestPlayer)
       }
   },[data])
    
    // console.log(data,'best player')

        if(isLoading){
            return <Loading/>
        }  

        if(error){
            return <div> Error: {error.message} </div>
        }

    return (
        <DisplayLayout>  
         <div>
          {data&& <MvpCard OverallBestPlayer={bestPlayer}/>}
         </div>
        </DisplayLayout>
    );
};

export default OverAllMvp;