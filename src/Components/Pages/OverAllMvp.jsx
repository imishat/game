import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import DisplayLayout from '../../Layout/DisplayLayout';
import OverAllMVPCard from '../Utilities/OverAllMVPCard';

const OverAllMvp = () => {
    const {selectedMatchId , selectedStageId,selectedTournamentId,setSelectedTournamentid, setSelectedStageId, setSelectedMatchId} = useContext(AuthContext)
    // const {data ,error,isLoading, refetch} = useQuery('overall', fetchOverAllData);
    const  [bestPlayer,setBestPlayer] = useState([])


// turnament
const [tournament,setTournament] = useState({})

console.log(tournament)

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

      // get all best players
     if(selectedStageId){ axios.get(`http://localhost:8000/standings/overall-topfragger?groupId=${selectedStageId}`)
      .then(res=>{
      return  setBestPlayer(res.data)
      })

      // get tourname data
      axios.get(`http://localhost:8000/tournaments/${selectedTournamentId}`)
      .then(res=>{
        return setTournament(res.data[0])
      })}
      else {
        return 
      }

    }, [searchParams,setSelectedStageId,selectedStageId,setSelectedTournamentid,setSelectedMatchId,selectedTournamentId])

  
  //  fetch  Tournament data 
//    async function fetchOverAllData()  {
//        if(selectedStageId){
//         const response = await fetch(`http://localhost:8000/standings/overall-topfragger?groupId=${selectedStageId}`)
//         if(!response.ok){
//            throw new Error('Failed to fetch  overall data')
//        }
//        refetch()
//        return response.json() ;
//        }
//    }
  
 
//    useEffect(()=>  {
//     if(bestPlayer){
//         const playersArr = bestPlayer?.map(player => player?.totalKills  )
//         const maxKills = Math.max(...playersArr)
//         const BestPlayer = bestPlayer?.find(x  => x?.totalKills === maxKills)
//         setTournament(BestPlayer)
//        }
//    },[bestPlayer])
    

    // console.log(data,'best player')

        // if(isLoading){
        //     return <Loading/>
        // }  

        // if(error){
        //     return <div> Error: {error.message} </div>
        // }

    return (
        <DisplayLayout>  
         <div>
          { <OverAllMVPCard tournament={tournament} OverallBestPlayer={bestPlayer} /> }
         </div>
        </DisplayLayout>
    );
};

export default OverAllMvp;