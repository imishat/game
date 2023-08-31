import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import DisplayLayout from '../../Layout/DisplayLayout';
import '../../assets/Style/BackgroundStyle.css';
import '../../assets/Style/style.css';
import LogoSection from '../Utilities/LogoSection';
import TopFraggerCard from '../Utilities/TopFraggerCard';

const TopFregger = () => {
    const {selectedMatchId,selectedStageId,selectedTournamentId,setSelectedTournamentid, setSelectedStageId, setSelectedMatchId} = useContext(AuthContext)
    const [bestPlayers,setBestPlayers] = useState([])
    const [noData,setNoData] = useState('');
    const [matchData,setMatchData] = useState([]) ;
    const [stageData,setStageData] = useState({})
    const [tournamentData,setTournamentData]  = useState()

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



// get best three players by match id 
useEffect(()=> {
    if(!selectedMatchId){
        setNoData("No Data, Please select tournament and match number")
      
    }else{
        const FetchThreeBestPlayers = async () => {
            try{
              const response = await fetch(`http://localhost:8000/standings/fragger?match-id=${selectedMatchId}`)
              const result = await response.json();
              setBestPlayers(result)
              console.log(result,'best players')
              
            }catch(error){
              console.log(error)
            }
          }
          FetchThreeBestPlayers()
    }
     
    },[selectedMatchId])
  
 
         // get match data by stage id 
    useEffect(()=> {
     if(selectedStageId){
      const FetchMatchById = async () => {
        try{
          const response = await fetch(`http://localhost:8000/matches?stage-id=${selectedStageId}`)
          const result = await response.json();
          setMatchData(result)
        }catch(error){
          console.log(error)
        }
      }
      FetchMatchById()
     }
    },[selectedStageId])


     // get stage data by stage id 
     useEffect(()=> {
        if(selectedStageId){
          const FetchStageById = async () => {
            try{
              const response = await fetch(`http://localhost:8000/stages/${selectedStageId}`)
              const result = await response.json();
              setStageData(result[0])
              
            }catch(error){
              console.log(error)
            }
          }
          FetchStageById()
        }
        },[selectedStageId]) 


          // Tournament, Stage, Match data get and set 
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
         <LogoSection stageData={stageData} tournamentData={tournamentData}  />
         {/* Card section */}
         <TopFraggerCard bestPlayers={bestPlayers} selectedMatchId={selectedMatchId}  />
        </div>
      </div>
        </DisplayLayout>
    );
};

export default TopFregger;