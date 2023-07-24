import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import '../../assets/Style/style.css'
import MvpCard from '../Utilities/MvpCard';

const MVP = () => {
    const {selectedTournamentId,selectedStageId,selectedMatchId,tournamentData,} = useContext(AuthContext)
    const [bestPlayer,setBestPlayer] = useState([])
    const [noData,setNoData] = useState('');
   // get best three players by match id 
useEffect(()=> {
    if(!selectedMatchId){
        setNoData("No Data, Please select tournament and match number")
      
    }else{
        const FetchThreeBestPlayers = async () => {
            try{
              const response = await fetch(`http://localhost:8000/standings/fragger?match-id=${selectedMatchId}`)
              const result = await response.json();
              setBestPlayer(result)
            //   console.log(result,'best players')
              
            }catch(error){
              console.log(error)
            }
          }
          FetchThreeBestPlayers()
    }
     
    },[selectedMatchId])
    
    console.log(tournamentData,'tournament')
  
    return (
       <DisplayLayout>
         <MvpCard selectedMatchId={selectedMatchId} bestPlayer={bestPlayer} />
       </DisplayLayout>
    );
};
export default MVP;