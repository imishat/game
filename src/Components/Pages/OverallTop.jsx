import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const OverallTop = () => {


const {
  
  
  selectedTournamentId,

  selectedStageId,
  selectedMatchId,
  selectedMatchData,
  setSelectedTournamentid,
  setSelectedStageId,
  setSelectedMatchId,
} = useContext(AuthContext);

const [stageData, setStageData] = useState({});
const [matchData, setMatchData] = useState([]);


const [tournamentData, setTournamentData] = useState({});
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

  // get stage data by stage id
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

  // get match data by stage id
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
      <div className=" bg-black  flex relative mt-40  h-60  ">
      {/* //static */}
      <div className="text-[18rem] inset-0 absolute -left-4 -top-28  font-custom text-custom">
      OVERALL STANDING
      </div>
      <div className=" relative flex w-full justify-evenly items-center right-0 ">
          {/* tournament logo */}
          <img
              width="300px"
              src={tournamentData?.logo}
              alt=""
          />

          <div className="text-white flex flex-col items-center mt-[4.5rem] ">
              <div className="flex w-full  justify-between ">
                  {/* tournament-name */}
                  <div className="relative font-bold text-[38px] left-2  font-custom top-16">
                  {tournamentData?.name} 
                  </div>
                  {/* group stage + match number -16 is total no. of match */}
                  <div className="relative font-bold text-[38px]  font-custom top-16 bg-[#187d5d] px-1 rounded-md ">
                      QUALIFICATION ROUND  {selectedMatchData?.matchNo} / {matchData?.length} 
                  </div>
              </div>
              <div className="font-custom text-[11rem] font-bold ">
              OVERALL STANDING
              </div>
          </div>
      </div>
  </div>

    );
};

export default OverallTop;