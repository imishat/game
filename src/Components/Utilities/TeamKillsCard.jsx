import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaCaretDown,
  FaMinus,
  FaPen,
  FaPlus,
  FaTrashAlt,
} from "react-icons/fa";
import {
  addWebsocketEventListener,
  sendPayload,
} from "../../socket-connection";
import supabase from "../../../config/supabase-client";
import { AuthContext } from "../../Context/AuthProvider";

const TeamKillsCard = ({
  team,
  matchId,
  matches,
  refetch,
  PlayerDead,
  mID,
  setPlayerDead,
  matchData,
  setMatchData,
  totalsKills,
  setTotalsKills,
  
}) => {
 
  const { logo, name, tag, players, _id } = team;
  const { dead } = matches[0];
  const [kills, setlKills] = useState({});
  const [totalKills, setTotalKills] = useState(0);
  const [rank, setRank] = useState(matches[0]?.[team?._id] || 0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [teamData, setTeamData] = useState({});
  const [contribution, setContribution] = useState(0);
  const { setDeadname}=useContext(AuthContext)

  let pointTable = {
    1: 10,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 1,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,

    "": 0,
  };

useEffect(()=>{

setTotalsKills(state=>{
  const perviecsKills=structuredClone(state)
  perviecsKills[team?._id]=totalKills
  return perviecsKills
})

},[totalKills])

  // data received from the web socket can be used here...
  const onPayloadReceivedAsync = async (payload) => {
    const { flag } = payload;

    if (flag === "SEND_KILLS") {
    } else if (flag === "SEND_PLAYER_DEAD") {
    } else if (flag === "SEND_RANK") {
    }
  };

  useEffect(() => {
    async function main() {
      
      const {data, error} = await supabase.from('teams').upsert({matchId: matchData?.matchId, teams: matchData,totalNumber:totalsKills}, {onConflict: 'matchId'})
      // console.log(error``)
    }

    main()
  }, [matchData,totalsKills])
  // console.log(matchData,"meatchdata")

  useEffect(() => {
    addWebsocketEventListener(onPayloadReceivedAsync);
  }, []);

  // Increase or decrease kills  value
  useEffect(() => {
    if (players?.length) {
      const playerKills = {};
      players?.forEach(
        (player) => (playerKills[player?._id] = player?.kills?.[matchId] || 0)
      );
      setlKills(playerKills);
    }
  }, [players]);

  // Total kills value
  useEffect(() => {
    let total = 0;
    Object.keys(kills).forEach((kill) => (total += kills[kill]));
    setTotalKills(total);
  }, [kills]);

  // Set total points
  useEffect(() => {
    const totalKillsNumber = parseInt(totalKills);
    console.log('totalsKills',totalKillsNumber)
    setTotalPoints(totalKillsNumber + parseInt(pointTable[rank] || 0));
    //  console.log(totalKillsNumber , rank,'total')
  }, [totalKills, rank, pointTable]);

  // Send kills value in database
  function sendKills(playerId, kill,  totalKills, type,) {
    // sends via web socket...
    const contribution = (kill / totalKills) * 100;
    console.log( contribution , type,"contribution")
    fetch(`http://localhost:8000/matches/kills`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "match-id": matchId,
        "player-id": playerId,
        kills: kill,
        teamId: team?._id,
        type: type,
        contribution:contribution
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  // Send kills value in database
  function sendContribution(matchId, kill, totalKills, teamID) {
    const contribution = (kill / totalKills) * 100;

    fetch(`http://localhost:8000/matches/contribution`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "match-id": matchId,
        "team-id": teamID,
        contribution: contribution,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
      });
  }

  // send player id who is dead
  function sendPlayerDead(dead, matchId, playerId, playerName) {
    // sends via web socket...
 
    sendPayload({
     
      playerName: playerName
    });

    fetch(`http://localhost:8000/matches/dead`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        dead: dead,
        "player-id": playerId,
        "match-id": matchId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`${playerName} is dead `);
        
          refetch();
        }
        // console.log(data)
      });
  }

  // Send rank  value in database
  function sendRank(rank) {
    // sends via web socket...
   

    fetch(`http://localhost:8000/matches/rank`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "match-id": matchId,
        "team-id": team?._id,
        rank: rank,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  // send total points
  useEffect(() => {
    fetch(`http://localhost:8000/matches/points`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "match-id": matchId,
        "team-id": team?._id,
        points: totalPoints,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data,'points')
      });
  }, [totalPoints]);

  // handle rank input
  const handleInputNumberChange = (e) => {
    const inputValue = e.target.value;
    setRank(parseInt(inputValue));
    sendRank(parseInt(inputValue));
  };

  //  Deleate team  kills card
  const deleteKillsCard = () => {
    const singleTeamId = teamData?._id;
    const teamName = teamData?.name;
    const shouldDelete = window.confirm(
      `Are you sure you want to delete ${teamName}`
    );

   
  };
  //

  return (
    <div className="text-white  mx-auto ">
      <div className="card rounded-md animated-background border-yellow-300 border shadow-small h-auto lg:w-96 w-96 md:w-80 mt-6">
        {/* top section  */}
        <div className="flex justify-between">
          {/* <img src={logo} alt="Shoes" className='w-24 h-24 rounded-sm ' /> */}
          <div className="flex">
            <div className="h-8 border">#</div>
            <input
              type="number"
              defaultValue={rank}
              onChange={handleInputNumberChange}
              className="w-12 h-8 text-black"
            />
          </div>
          <div className="mt-2">
            <h1 className="text-lg font-medium"> Team Name: {name} </h1>
            <h1 className="text-lg font-medium"> Team Tag: {tag} </h1>
          </div>
          <div className="p-2 flex flex-col">
            <button
              onClick={() => deleteKillsCard(setTeamData(team))}
              className="w-8 h-8 border rounded-full hover:bg-gray-600 hover:text-red-500  "
            >
              {" "}
              <FaTrashAlt className="mx-auto" />{" "}
            </button>
            <button className="w-8 h-8 border rounded-full hover:bg-gray-600 hover:text-blue-500 mt-2">
              {" "}
              <FaPen className="mx-auto" />{" "}
            </button>
          </div>
        </div>

        <div className="card-body mt-0">
          <h2 className="card-title">
            Players <FaCaretDown />
          </h2>
          <div className="w-full">
            {players?.slice(0, 4)?.map((player) => (
              <div key={player?._id} className="grid grid-cols-5 gap-x-2 mt-2 ">
                <img
                  src={player?.playerImg}
                  className="w-10 h-10  rounded-full"
                />
                <span className="text-xl col-span-2  "> {player?.name} </span>
                <div className="flex justify-between gap-1 items-center  ">
                  <button
                    className="border  h-6 hover:text-rose-500 "
                    disabled={dead?.find((x) => x === player?._id)}
                    onClick={() => {
                      const oldKills = structuredClone(kills);
                      oldKills[player?._id] -= 1;
                      setlKills(oldKills);
                      sendKills(
                        player?._id,
                        kills[player?._id] - 1,
                        totalKills - 1,
                        "dic"
                      );
                      sendContribution(team?._id);
                    }}
                  >
                    {" "}
                    <FaMinus />{" "}
                  </button>
                  <span className="w-10 h-6  bg-white text-black text-center">
                    {" "}
                    {kills[player?._id]}{" "}
                  </span>
                  <button
                    className="border h-6 hover:text-blue-400 "
                    disabled={dead?.find((x) => x === player?._id)}
                    onClick={() => {
                      const oldKills = structuredClone(kills);
                      const obj = structuredClone(matchData)

                      oldKills[player?._id] += 1;
                    
                    
                      
                      setlKills(oldKills);
                      sendKills(
                        player?._id,
                        kills[player?._id] + 1,
                        totalKills + 1,
                        "increase"

                      );
                    }}
                  >
                    {" "}
                    <FaPlus />{" "}
                  </button>
                </div>
                <div className=" flex  items-center gap-x-5 ml-4">
                  {" "}
                  <input
                    type="checkbox"
                    className="checkbox-xs"
                    id={player?._id}
                    defaultChecked={dead?.find((x) => x === player?._id)}
                    onChange={(e) => {
                      const obj = structuredClone(matchData)
                      obj.teams = matchData?.teams?.map(i => {
                        const newI = structuredClone(i)
                        newI.players = i?.players?.map(j => {
                          if(j?._id===player?._id) j.dead = e.target.checked
                          return j 
                        })
                        return newI
                      })
                      setMatchData(obj)

                      if (e.target.checked) {
                        sendPlayerDead(
                          true,
                          matchId,
                          player?._id,
                          player?.name

                        );
                        setDeadname(player?.name)
                      } else {
                        sendPlayerDead(
                          false,
                          matchId,
                          player?._id,
                          player?.name
                        );
                      }
                    }}
                  />{" "}
                  <span> Dead</span>
                </div>
              </div>
            ))}
          </div>

          {/* divider  */}
          <div className="w-full h-[2px]  bg-slate-300"> </div>
          {/* calculate section   */}
          <div className="text-2xl font-semibold text-center">
            <h1>Total Kills = {totalKills || 0} </h1>
            <h1> Rank Points = {pointTable[rank] || 0} </h1>
            <h1> Total Points = {totalPoints} </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamKillsCard;
