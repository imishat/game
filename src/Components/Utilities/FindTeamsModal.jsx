import { React, useRef, useState } from "react";
import Loading from "./Loading";

const FindTeamsModal = ({ data, isLoading, matchId, setRandom }) => {
  const closeButton = useRef();
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [filterdTeam, setFilterdTeam] = useState([]);

  // const handleCheckbox = (e) => {
  //   const teamsId = e.target.value;
  //   const isChecked = e.target.checked;
  //   if (isChecked) {
  //     setSelectedIds([...selectedIds, teamsId]);
  //   }
  // };

  // console.log("Data: ", data);

  const handleCheckbox = (e) => {
    const teamsId = e.target.value;
    const isChecked = e.target.checked;

    setSelectedIds((previousState) => {
      if (isChecked) {
        if (previousState.includes(teamsId)) {
          return previousState.filter((item) => item !== teamsId);
        } else {
          return [...previousState, teamsId];
        }
      } else {
        return previousState.filter((item) => item !== teamsId);
      }
    });
  };

  // handle seleted teams
  const handleSelectedTeams = (team) => {
    setSelectedTeams((previousState) => {
      const isTeamExist = previousState.find((item) => item._id === team._id);
      if (isTeamExist) {
        return previousState.filter((item) => item._id !== team._id);
      } else {
        return [...previousState, team];
      }
    });
  };

  // console.log("Seleted Teams: ", selectedTeams);
  // console.log("Seleted Teams IDs: ", selectedIds);

  // console.log("Team data: ", data);

  // console.log('teams modal', matchId)
  const handleFindGroup = async (e) => {
    e.preventDefault();
    // console.log(selectedIds);
    const teamId = { teams: selectedIds, "match-id": matchId };

    try {
      const response = await fetch(`http://localhost:8000/matches/add-team`, {
        method: "Post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          teamsPayload: teamId,
          teams: selectedTeams?.map((item) => {
            return {
              _id: item._id,
              name: item.name,
              logo: item.logo,
              status: 4,
              totalKills: 0,
              players: item?.players,
            };
          }),
        }),
      });
      if (!response.ok) {
        throw new Error(" Failed to filter teams by id ");
      } else setRandom(Math.random());
      const filterTeamData = await response.json();
      setFilterdTeam(filterTeamData);
      closeButton.current.click();
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(filterdTeam)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <input type="checkbox" id="find_teams_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box pt-2 pb-4 px-6  ">
          <div className=" ">
            <h1 className="text-3xl font-semibold  mb-1 mt-0">
              {" "}
              Add Teams Details{" "}
            </h1>
            <hr className="w-full h-2 text-gray-600" />
            <form
              action=""
              onSubmit={handleFindGroup}
              className=" px-4 pb-3 mt-4 border-2 border-slate-200 rounded-md"
            >
              <div>
                {data?.map((teams) => (
                  <div key={teams?._id}>
                    <input
                      onChange={(e) => {
                        handleCheckbox(e);
                        handleSelectedTeams(teams);
                      }}
                      type="checkbox"
                      // checked={selectedIds.includes(teams._id)}
                      checked={selectedTeams?.find(
                        (item) => item?._id === teams?._id
                      )}
                      value={teams?._id}
                      className=""
                    />
                    <label> {teams?.name} </label>
                  </div>
                ))}
              </div>

              <div className="modal-action">
                <label
                  ref={closeButton}
                  htmlFor="find_teams_modal"
                  className="bg-rose-500 text-white px-4 py-1 rounded-md hover:bg-rose-600 cursor-pointer"
                >
                  {" "}
                  Close{" "}
                </label>
                <input
                  type="submit"
                  value={"Submit"}
                  className="px-4 py-1 border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTeamsModal;
