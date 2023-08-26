import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import DisplayLayout from "../../Layout/DisplayLayout";
import "../../assets/Style/style.css";
import StandingTable from "../Utilities/StandingTable";

const Standing = () => {
  const navigate = useNavigate();
  //const  tournamentId = 64a9811459adef7a8d9fc300
  // required code for live update
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
  const [teamData, setTeamData] = useState({});
  const [teams, setTeams] = useState([]);
  const [tournamentData, setTournamentData] = useState({});

  // required code for live update
  const [searchParams] = useSearchParams();

  // required code for live update
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
  }, []);

  useEffect(() => {
    setTeams(
      Object.keys(teamData).map((team) => teamData[team]) // set  Team data as a array
    );
  }, [teamData]);

  // get tournament data by tournament id
  // if(selectedTournamentId == null && selectedStageId  == null){
  //  toast.error("Please  click display then select  tournament and group")
  // }
  // Tournament, Stage, Match data get and set
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

  // get team data by match id
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

  // console.log(teamData,'teamdata')

  console.log(teams, "teams");
  return (
    <>
      {/* {JSON.stringify(matchData)} */}

      <DisplayLayout>
        <StandingTable
          selectedMatchId={selectedMatchId}
          selectedStageId={selectedStageId}
          selectedTournamentId={selectedTournamentId}
          teams={teams}
          tournamentData={tournamentData}
          matchData={matchData}
          stageData={stageData}
          teamData={teamData}
          selectedMatchData={selectedMatchData}
        />
      </DisplayLayout>
    </>
  );
};

export default Standing;
