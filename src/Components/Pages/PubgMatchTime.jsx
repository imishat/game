import React, { useContext, useEffect, useState } from 'react'



import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthProvider';
import bg from "../../assets/images/images/bg.png";
import shanok from "../../assets/images/images/shanak.jpg";
import miramar from "../../assets/images/images/miramar.jpg";
import fragel from "../../assets/images/images/fragel.jpg";
import vikendi from "../../assets/images/images/vikendi.jpg";
import DisplayLayout from '../../Layout/DisplayLayout';

function PubgMatchTime() {


  const [loading, setLoading] = useState(true);
  //
  const [data, setData] = useState([]);

  const {
    selectedStageId,
    setSelectedTournamentid,
    setSelectedStageId,
    setSelectedMatchId,
    selectedTournamentId,
    selectedMatchData,
  } = useContext(AuthContext);
  const [noData, setNoData] = useState("");
  const [searchParams] = useSearchParams();
  const [tournamentData, setTournamentData] = useState({});
  const [stageData, setStageData] = useState({});
  const [matchData, setMatchData] = useState([]);
console.log(matchData,"rrr")


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

    if (selectedStageId) {
      setLoading(true);
      axios
        .get(`http://localhost:8000/matches?stage-id=${selectedStageId}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }
  }, [
    searchParams,
    setSelectedMatchId,
    setSelectedStageId,
    setSelectedTournamentid,
    selectedStageId,
  ]);
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
    <DisplayLayout>
    <div className='bg-[teal] '>
     <div className='max-w-container mx-auto'>
    <nav className=' py-4'>
      <div className="flex gap-x-20 items-center">
            <div className='w-1/6'>
            <img src={tournamentData.logo
} alt="" />
            </div>
            <div className='w-5/6'>
            <div className=" flex gap-x-[75px]">
              <h2 className='text-2xl font-semibold font-dm text-white'>{tournamentData?.name}</h2>
              <h2 className="bg-[green] px-4 py-2 text-2xl font-semibold font-dm text-white">{stageData?.name} {selectedMatchData?.matchNo} / {matchData?.length}</h2>
            </div>
            <h1 className='font-Oswald text-white text-[80px] font-bold tracking-[10px]'>TODAYS   SCHEDULE</h1>
            </div>
    </div>
   </nav>

    <div className="flex  gap-x-10 pb-8">

{
    data.map((match)=>{
  
return <div className='w-[300px]'>
     <div className='w-full bg-[green]  py-4 text-center hover:bg-white duration-500 group'> 
     <h2 className="group-hover:text-black text-2xl font-semibold font-dm text-white"> {match?.matchNo}</h2>
   </div>
    <div className='relative'>




    <img
                
                src={
                  match?.chooseMap?.toLowerCase() === "shenok"
                    ? shanok
                    : match?.chooseMap?.toLowerCase() === "erangel"
                    ? bg
                    : match?.chooseMap?.toLowerCase() === "miramar"
                    ?
                    miramar
                    : match?.chooseMap?.toLowerCase() === "vikendi"
                    ?
                    vikendi
                    : bg
                }
                alt=""
              />











    <div className='flex justify-center items-end bg-black/30 h-full w-full absolute top-0 left-0'>
       <h3 className="font-dm text-white text-2xl font-semibold text-white pb-4">{match?.chooseMap}</h3>
    </div>
    </div>
   <div className='w-full bg-gray-600 py-2 text-center hover:bg-black duration-500 group'> 
     <h2 className=' font-dm  font-extrabold text-3xl text-[black] group-hover:text-white'>{match?.time}</h2>
   </div>
  </div>
   
   })
}

    </div>
    </div>
    </div>
    </DisplayLayout>
  )
}

export default PubgMatchTime