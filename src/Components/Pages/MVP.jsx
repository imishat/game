import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import '../../assets/Style/style.css'
import MvpCard from '../Utilities/MvpCard';
import { connectAuthEmulator } from 'firebase/auth';

const MVP = () => {
    const {selectedTournamentId,selectedStageId,selectedMatchId} = useContext(AuthContext)
    const [bestPlayer,setBestPlayer] = useState([])
    const [noData,setNoData] = useState('');
    const [tournanmentData,setTournamentData] = useState(null)


   
   // get best three players by match id 
useEffect(()=> {
    if(!selectedMatchId){
        setNoData("No Data, Please select tournament and match number")
      
    }else{
        const FetchThreeBestPlayers = async () => {
            try{
              const response = await fetch(`https://pubg-gaming-backend.onrender.com/standings/fragger?match-id=${selectedMatchId}`)
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
    
    useEffect(()=> {
      if(selectedTournamentId){
        const FetchTournamentById = async () => {
          try{
            const response = await fetch(`https://pubg-gaming-backend.onrender.com/tournaments/${selectedTournamentId}`)
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
    return (
       <DisplayLayout>
         <MvpCard selectedMatchId={selectedMatchId} bestPlayer={bestPlayer} tournanmentData={tournanmentData} />
       </DisplayLayout>
    );
};
export default MVP;