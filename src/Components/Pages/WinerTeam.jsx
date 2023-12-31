import React, { useContext, useEffect, useState } from 'react'


import LogoPubg from "../../assets/images/images/logoPabg.png"

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
      console.log(teams,"aa")

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


//  const teamArray = Array.isArray(teams) && teams?.map(item => item?.points[selectedMatchId] || item?.points)
const teamArray = Array.isArray(teams) && teams?.map(item => {
  // Check if the item has the points property and if it has the selectedMatchId property
  if (item?.points && item?.points[selectedMatchId]) {
    // If it does, return the team's points for the selectedMatchId
    return item.points[selectedMatchId];
  } else {
    // If not, return 0 or some default value, depending on your logic
    return 0; // Change this if needed
  }
});

const maxPoints = Math.max(...teamArray);

 
  // const maxPoints = Math.max(...teamArray);
  //  find the max pointed team
  const bestTeam = Array.isArray(teams) && teams?.find(x => x?.points[selectedMatchId] === maxPoints || x?.points === maxPoints)

   
  // sort data by points max to  min 
  const sortTeams = Array.isArray(teams) && teams?.sort((a, b) => b?.points?.[selectedMatchId] - a?.points?.[selectedMatchId] ) 

  const [currentPage ,setCurrentPage]  = useState(1)
  const PER_PAGE_ITEM = 10 ;
  const startIndex =  (currentPage - 1) * PER_PAGE_ITEM ;
  const endIndex = startIndex + PER_PAGE_ITEM ;
  const currentData = sortTeams?.slice(startIndex , endIndex);
  const totalPages = Math.ceil(sortTeams?.length / PER_PAGE_ITEM);
useEffect(() => {
    setTeams(
      Object?.keys(teamData)?.map((team,i) => teamData[team,i]) // set  Team data as a array
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
?tournamentData.logo :{LogoPubg }} alt="" />
                    </div>
                    <div>
                    <div className="gap-x-[75px] flex justify-center">
                    <h2 className='text-2xl font-semibold font-pop text-white'>{tournamentData.name}</h2>
                    <h2 className='text-2xl font-semibold font-pop text-white'>{stageData?.name} {selectedMatchData?.matchNo} / {matchData?.length}</h2>
                    </div>
                    <h1 className='font-pop text-center text-white text-[50px] font-bold tracking-wide'>WINNER TEAM FOCUS</h1>
                    
                    </div>
            </div>
        </nav>

        <section>
        <div className="flex justify-between">
            
            {
          bestTeam?.players?.length && bestTeam?.players?.slice(0,4)?.map((player,index)=>{
            console.log(player,"pp")
                
            return <div key={index} className='w-[300px] relative '>
                        <div className='h-[230px]  bg-black/50  absolute top-[85px] w-full z-[-1]'></div>
                        <div className='flex justify-center'>
                            <img  className = " w-[200px]" src={player?.playerImg} alt="" />
                        </div>
                        <h3 className='text-center bg-[green] py-1 font-dm  text-2xl font-semibold text-white'>{player?.name?player?.name:"name"}</h3>
                        <div className='bg-white'>
                            <div className="flex justify-between pt-2 px-2">
                            <button className='bg-[green] px-2 py-2 font-pop font-semibold text-white text-lg hover:bg-black duration-500 rounded-[2px]'>ELIMINATON</button>
                            <button className='bg-[green] px-2 py-2 font-pop font-semibold text-white text-lg hover:bg-black duration-500 rounded-[2px]'>CONTRIBUTION</button>
                            
                            </div>
                            <className className="flex justify-center gap-x-[130px]">
                            
  <h4 className='font-dm text-2xl font-semibold text-black' key={index}>{player.kills[selectedMatchId]}</h4>

                            <h4 className='font-pop  text-2xl font-semibold text-black'>{player?.contribution ? player.contribution.toFixed(2) : 0}% </h4>
                            </className>

                        </div>
                        </div>
            })
            }
        

            </div>
        </section>

        <section className='mt-2'>
  {Array.isArray(currentData) && currentData.slice(0,1).map((bestTeam, i) => {
    console.log(bestTeam)

     return( <div className='flex justify-between pb-2' key={i}>
      <div className='w-[25%] '>
        <h2 className='text-4xl bg-[green] p-2 font-semibold font-dm text-white'>{bestTeam.name}</h2>
      </div>
      <div className='w-[40%] '>
        <h5 className='p-2 bg-white font-dm text-4xl font-semibold text-black'>
      {bestTeam?.points[selectedMatchId] || bestTeam?.points }
        </h5>
      </div>
      <div className='w-[32%] '>
        <h5 className='bg-white p-2 font-dm text-4xl font-semibold text-black'>
          match point {bestTeam.kills}
        </h5>
      </div>
    </div>)
})}
</section>
    </div>     

    </div>
    </DisplayLayout>
  )
}

export default WinerTeam