import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import DisplayLayout from "../../Layout/DisplayLayout";
import "../../assets/Style/style.css";
import Loading from "../Utilities/Loading";
import SingleStylishCard from "../Utilities/SingleStylishCard";

const Schediul = () => {
  // loading schediul
  const [loading, setLoading] = useState(true);
  //
  const [data, setData] = useState([]);

  const {
    selectedStageId,
    setSelectedTournamentid,
    setSelectedStageId,
    setSelectedMatchId,
  } = useContext(AuthContext);
  const [noData, setNoData] = useState("");
  const [searchParams] = useSearchParams();

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

  // get match details data and show it
  // const {data, isLoading, refetch ,error} = useQuery('match', async () => {

  //         if(!selectedStageId){
  //             setNoData(" Please select tournament and group")
  //         }else{
  //             const response = await fetch(`http://localhost:8000/matches?stage-id=${selectedStageId}`);
  //             if(!response.ok){
  //                 throw new Error("Failed to fetch match data ")
  //             }
  //             refetch()
  //             return response.json();

  //         }

  //     })
  //    if(isLoading){
  //     return <Loading/>
  //    }
  //    if(error){
  //     return <div> {error.message} </div>
  //    }

  return (
    <DisplayLayout>
      <div className="bg-linear-rose ">
        <h1 className="text-4xl text-center font-semibold "> Schedule </h1>
        <h1>
          {/* {noData && <span className='font-semibold'> {noData} </span>} */}
        </h1>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-3 my-6  md:grid-cols-2 grid-cols-1 pb-10  mt-4 gap-x-5 gap-y-8">
            {data?.map((match) => (
              <SingleStylishCard key={match?._id} match={match}>
                {" "}
              </SingleStylishCard>
            ))}
          </div>
        )}
      </div>
    </DisplayLayout>
  );
};

export default Schediul;
