import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import '../../assets/Style/style.css'
import MvpCard from '../Utilities/MvpCard';
import { connectAuthEmulator } from 'firebase/auth';
import { useSearchParams } from 'react-router-dom';

const MVP = () => {
    const {selectedTournamentId,selectedStageId,selectedMatchId, setSelectedTournamentid, setSelectedStageId, setSelectedMatchId} = useContext(AuthContext)
    const [bestPlayer,setBestPlayer] = useState([])
    const [noData,setNoData] = useState('');
    const [tournanmentData,setTournamentData] = useState(null)

    
    const [teamData,setTeamData] = useState({}); 

    const [searchParams] = useSearchParams();


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


    useEffect(() => {
      
    }, [teamData])


   

useEffect(()=> {
    if(!selectedMatchId){
        setNoData("No Data, Please select tournament and match number")
      
    }else{
        const FetchThreeBestPlayers = async () => {
            try{
              const response = await fetch(`http://localhost:8000/standings/fragger?match-id=${selectedMatchId}`)
              const result = await response.json();
              setBestPlayer(result)
           console.log(result,'best players')
          
              
            }catch(error){
              console.log(error)
            }
          }
          FetchThreeBestPlayers()
    }
     
    },[selectedMatchId])
    
    useEffect(()=> {
      if(selectedTournamentId){
        const FetchTournamentById = async () => {
          try{
            const response = await fetch(`http://localhost:8000/tournaments/${selectedTournamentId}`)
            const result = await response.json();
            setTournamentData(result[0])
            
          }catch(error){
            console.log(error)
          }
        }
        FetchTournamentById()
      }
       
      },[selectedTournamentId])
  
      console.log(tournanmentData,'tt')

      // get team data by match id 
useEffect(()=> {
if(selectedMatchId){
  const FetchTeamByMatchId = async () => {
    try{
      const response = await fetch(`http://localhost:8000/standings/match?match-id=${selectedMatchId}`)
      const result = await response.json();
      console.log('response of fetchTeamByMatchId: ', result);
      setTeamData(result)
      
    }catch(error){
      console.log(error)
    }
  }
  FetchTeamByMatchId()
}
 
},[selectedMatchId])

    return (
       <DisplayLayout>
         <MvpCard selectedMatchId={selectedMatchId} bestPlayer={bestPlayer} tournanmentData={tournanmentData} />
       </DisplayLayout>
    );
};
export default MVP;