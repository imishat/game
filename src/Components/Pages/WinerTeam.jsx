import React, { useContext, useEffect, useState } from 'react'

import data from '../../data/data'
import LogoPubg from "../../assets/images/images/logoPabg.png"
import PubgMan from "../../assets/images/images/pabgMan.png"
import DisplayLayout from '../../Layout/DisplayLayout'
import { AuthContext } from '../../Context/AuthProvider'
import { useSearchParams } from 'react-router-dom'

function WinerTeam() {


    const {
        selectedTournamentId,
        selectedStageId,
        selectedMatchId,
        selectedMatchData,
        setSelectedTournamentid,
        setSelectedStageId,
        setSelectedMatchId,
      } = useContext(AuthContext);
      const [tournamentData, setTournamentData] = useState({});

      const [stageData, setStageData] = useState({});
      const [matchData, setMatchData] = useState([]);
      const [teamData, setTeamData] = useState({});
      const [teams, setTeams] = useState([]);

      const [searchParams] = useSearchParams();

 const teamArray = teams?.map(item => item?.points[selectedMatchId] || item?.points)
  const maxPoints = Math.max(...teamArray);
  const bestTeam = teams?.find(x => x?.points[selectedMatchId] === maxPoints || x?.points === maxPoints)
  console.log(bestTeam,"teambest")
  // sort data by points max to  min 
  const sortTeams = teams?.sort((a, b) => b?.points?.[selectedMatchId] - a?.points?.[selectedMatchId] ) 


useEffect(() => {
    setTeams(
      Object.keys(teamData).map((team,i) => teamData[team,i]) // set  Team data as a array
    );
  }, [teamData]);







      useEffect(() => {
        const tournamentId = searchParams.get("tournamentId");
        const stageId = searchParams.get("stageId");
        const matchId = searchParams.get("matchId");
    
        setSelectedTournamentid(tournamentId);
        setSelectedStageId(stageId);
        setSelectedMatchId(matchId);
    
        // set on localstorage
        localStorage.setItem("tournamentId", tournamentId);
        localStorage.setItem("stageId", stageId);
        localStorage.setItem("matchId", matchId);
      }, [searchParams,
        setSelectedMatchId,
        setSelectedStageId,
        setSelectedTournamentid,
        selectedStageId,]);




//get tournment data 
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

// stage data
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

          //get match data
          useEffect(() => {
            if (selectedMatchId) {
              const FetchTeamByMatchId = async () => {
                try {
                  const response = await fetch(
                    `http://localhost:8000/standings/match?match-id=${selectedMatchId}`
                  );
                  const result = await response.json();
                  setTeamData(result);
                } catch (error) {
                  console.log(error);
                }
              };
              FetchTeamByMatchId();
            }
          }, [selectedMatchId]);

        
          
  return (
    <DisplayLayout>
    <div className=' bg-[teal]  absolute w-full z-30'>
     <div className='max-w-container mx-auto'>
        <nav className=''>
            <div className="gap-x-20 flex items-center">
                    <div className='w-1/6'>
                    <img src={tournamentData.logo
} alt="" />
                    </div>
                    <div className='w-5/6'>
                    <div className="gap-x-[75px] flex">
                    <h2 className='text-2xl font-semibold font-dm text-white'>{tournamentData.name}</h2>
                    <h2 className='text-2xl font-semibold font-dm text-white'>{stageData?.name} {selectedMatchData?.matchNo} / {matchData?.length}</h2>
                    </div>
                    <h1 className='font-Oswald text-white text-[50px] font-bold tracking-wide'>WINNER TEAM FOCUS</h1>
                    
                    </div>
            </div>
        </nav>

        <section>
        <div className="flex justify-between">
            
            {
          bestTeam&& bestTeam?.players?.slice(0,4)?.map((player,index)=>{
                
            return <div key={index} className='w-[300px] relative '>
                        <div className='h-[150px]  bg-black/50 absolute top-[150px] w-full z-[-1]'></div>
                        <div className="">
                            {/* <img src={imageUrl} alt="ManOne" /> */}
                            <img  className = " "src={player?.playerImg
} alt="" />
                        </div>
                        <h3 className='text-center bg-[green] py-1 font-dm text-white text-2xl font-semibold text-white'>{player?.name?player?.name:"name"}</h3>
                        <div className='bg-white'>
                            <div className="flex justify-between pt-2 px-2">
                            <button className='bg-[green] px-2 py-2 font-dm font-semibold text-white text-lg hover:bg-black duration-500 rounded-[2px]'>ELIMINATON</button>
                            <button className='bg-[green] px-2 py-2 font-dm font-semibold text-white text-lg hover:bg-black duration-500 rounded-[2px]'>CONTRIBUTION</button>
                            
                            </div>
                            <className className="flex justify-center gap-x-[130px]">
                            <h4 className='font-dm  text-2xl font-semibold text-black'>kilss</h4>
                            <h4 className='font-dm  text-2xl font-semibold text-black'>{player?.contribution ? player.contribution.toFixed(2) : 0}% </h4>
                            </className>

                        </div>
                        </div>
            })
            }
        

            </div>
        </section>

        <section className='mt-4'>
        <div className="flex justify-between pb-2">
                <div className='w-[25%] '>
                <h2 className='text-4xl bg-[green] p-2  font-semibold font-dm text-white'>{bestTeam?.name}</h2>
                
                </div>
                <div className='w-[40%] '>

                <h5 className='p-2 bg-white font-dm  text-4xl font-semibold text-black'>esas</h5>
                
                </div>
                <div className='w-[32%] '>
                <h5 className='bg-white  p-2 font-dm  text-4xl font-semibold text-black'>match point {bestTeam?.kills}</h5>
                </div>
            
            </div>
        </section>
    </div>     

    </div>
    </DisplayLayout>
  )
}

export default WinerTeam