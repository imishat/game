import React, { useContext, useEffect, useState } from 'react'


import DisplayLayout from '../../Layout/DisplayLayout'
import { AuthContext } from '../../Context/AuthProvider'
import bg from '../../assets/images/images/bg.png';
import miramar from "../../assets/images/images/miramar.jpg";
import shanok from "../../assets/images/images/shanak.jpg";
import vikendi from "../../assets/images/images/vikendi.jpg";
function Coming() {
   const {selectedMatchId,
    selectedStageId,selectedTournamentId,selectedMatchData,} = useContext(AuthContext)
   
   const [tournamentData, setTournamentData] = useState({});
  const [stageData, setStageData] = useState({});
  const [matchData, setMatchData] = useState([]);
  
 
  const match = matchData.find(item => item._id === selectedMatchId);




  useEffect(() => {
    if (selectedTournamentId) {
      const FetchTournamentById = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/tournaments/${selectedTournamentId}`
          );
          const result = await response.json();
          setTournamentData(result[0]);
        } catch (error) {
          console.log(error);
        }
      };
      FetchTournamentById();
    }
  }, [selectedTournamentId]);

  useEffect(() => {
    if (selectedStageId) {
      const FetchStageById = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/stages/${selectedStageId}`
          );
          const result = await response.json();
          setStageData(result[0]);
        } catch (error) {
          console.log(error);
        }
      };
      FetchStageById();
    }
  }, [selectedStageId]);

// match length
  useEffect(() => {
    if (selectedStageId) {
      const FetchMatchById = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/matches?stage-id=${selectedStageId}`
          );
          const result = await response.json();
          setMatchData(result);
        } catch (error) {
          console.log(error);
        }
      };
      FetchMatchById();
    }
  }, [selectedStageId]);

  
  return (
   <>
   <DisplayLayout>
     <section className=' bg-[teal] pb-3'>
       <nav className='max-w-container mx-auto'>
            <div className="flex gap-x-10 items-center">
                    <div className='w-[12%]'>
                       <img src={tournamentData?.logo} alt="" />
                    </div>
                    <div className='w-[65%]'>
                       <div className=" pt-2 flex gap-x-10 justify-center items-center">
                        <h2 className='text-2xl font-semibold font-pop text-white'>{tournamentData?.name}</h2>
                        <h2 className='bg-[green] px-4 py-1 text-2xl font-semibold font-pop text-white'>{stageData?.name} {selectedMatchData?.matchNo} / {matchData?.length}</h2>
                       </div>
                       <h1 className='font-pop  text-white text-[65px] font-extrabold tracking-wide text-center'>COMING NEXT MAP</h1>
                        
                    </div>
                </div>
      </nav>
   
      <img 
         
            className='w-[600px]  mx-auto flex items-center  bg-cover bg-center bg-no-repeat   border-[5px] border-white  justify-center mt-5 '
            src={
              match?.chooseMap?.toLowerCase() === "shenok"
                ? shanok
                : match?.chooseMap.toLowerCase() === "erangel"
                ? bg
                : match?.chooseMap.toLowerCase() === "miramar"
                ?
                miramar
                :match?.chooseMap.toLowerCase() === "vikendi"
                ?
                vikendi
                : bg
            }
            alt="" />
            
    </section>
    </DisplayLayout>
   </>
  )
}

export default Coming