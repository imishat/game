import React, { useContext, useEffect, useState } from 'react';
import '../../assets/Style/style.css'
import '../../assets/Style/Table.css'
import LogoSection from './LogoSection';


const StandingTable = ({tournamentData, matchData, stageData,    selectedMatchId,  teams, selectedMatchData}) => {
  // get maxpoints team 
  const teamArray = teams?.map(item => item?.points[selectedMatchId] || item?.points)
  const maxPoints = Math.max(...teamArray);
  const bestTeam = teams?.find(x => x?.points[selectedMatchId] === maxPoints || x?.points === maxPoints)
  console.log(bestTeam,"best")
  
  // sort data by points max to  min 
  const sortTeams = teams?.sort((a, b) => b?.points?.[selectedMatchId] - a?.points?.[selectedMatchId] ) 

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

  const [currentPage ,setCurrentPage]  = useState(1)
  const PER_PAGE_ITEM = 10 ;
  const startIndex =  (currentPage - 1) * PER_PAGE_ITEM ;
  const endIndex = startIndex + PER_PAGE_ITEM ;
  const currentData = sortTeams?.slice(startIndex , endIndex);
  const totalPages = Math.ceil(sortTeams?.length / PER_PAGE_ITEM);


  const nextPageHandlar = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1 )
    }
  }

  const previousPageHandlar = () =>  {
    if(currentPage >  1) {
      setCurrentPage( currentPage - 1)
    }
  }

  const best = (bestTeam?.players?.map((player) => console.log(player?.playerImg)))

    return (
<>
<LogoSection/>
  <div className="w-full flex justify-evenly mt-20" >
        <div className="h-[619px] w-[599px]">
         <div className="flex  bg-black bg-opacity-50  h-[452px]  custom-clip-path ">
            {/* palyer1 image of 1st team */}
            {(bestTeam?.players?.slice(0,4)?.map((img) => <img
            key={img?._id}
              height="375px"
              // style={{ position: "relative", top: "78px", left: "-110px" }}
              className="relative top-[78px] -left-[100px]"
              src={img?.playerImg}
              alt=""
            />
           
            ))}
          </div>
          <div className="flex h-[120px] w-full justify-between bg-[#c0c0c0] px-2 custom-clip-path2">
            {/* logo of 1st team */}
           
            {/* name of 1st team */}
            <div
              className="font-custom text-[63px] font-bold relative top-2"
            >
           <p> {bestTeam?.name} </p>
            </div>
            {/* static flag of nepal */}
            <img
              height="68px"
              src={bestTeam?.logo}
              alt=""
            />
          </div>
          <div className="h-[120px] flex bg-white items-center justify-evenly custom-clip-path3">

            {/* higesht team postion */}
            <div className="text-center  font-bold text-3xl "  >
              <div>
              {bestTeam?.rank||0 }
</div>
              <div>PLACE</div>
            </div>
            {/* top team Rank Point */}
            <div className="text-center  font-bold text-3xl ">
              <div>15</div>
              <div>RANK PTS</div>
            </div>
            {/* top team Total kill */}
            <div className="text-center  font-bold text-3xl ">
              <div>{bestTeam?.kills }</div>
              <div>ELIMS</div>
            </div>
              {/* top team Total Point */}
            <div className="text-center  font-bold text-3xl ">
              <div>{bestTeam?.points[selectedMatchId] }</div>
              <div>TOTAL PTS</div>
            </div>
          </div>
        </div>
        <div className="">
        <table
            style={{ borderCollapse: "separate", borderSpacing: "3px" }}
            class="  "
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: "110px",
                    height: "38px",
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white",
                    clipPath:
                      "polygon(10.91% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 22.41%)",
                  }}
                  scope="col"
                >
                  RANK
                </th>
                <th
                  style={{
                    width: "529px",
                    height: "38px",
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white",
                    clipPath:
                      "polygon(0% 0%, 7.56% 0%, 8.88% 13.79%, 31.76% 13.79%, 32.7% 0%, 70.13% 0%, 71.27% 13.79%, 89.22% 13.79%, 90.36% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                  scope="col"
                >
                  TEAM NAME
                </th>
                <th
                  style={{
                    width: "104px",
                    height: "38px",
                    textAlign: "center",
                    backgroundColor: "#007B56",
                    color: "white",
                  }}
                  scope="col"
                >
                  PLACE
                </th>
                <th
                  style={{
                    width: "104px",
                    height: "38px",
                    textAlign: "center",
                    backgroundColor: "#007B56",
                    color: "white",
                  }}
                  scope="col"
                >
                  RANK PTS
                </th>
                <th
                  style={{
                    width: "104px",
                    height: "38px",
                    textAlign: "center",
                    backgroundColor: "#007B56",
                    color: "white",
                  }}
                  scope="col"
                >
                  ELMS
                </th>
                <th
                  style={{
                    width: "105px",
                    height: "38px",
                    textAlign: "center",
                    backgroundColor: "#007B56",
                    color: "white",
                    clipPath:
                      "polygon(0% 0%, 88.46% 0%, 100% 20.34%, 100% 100%, 0% 100%)",
                  }}
                  scope="col"
                >
                  TOTAL PTS
                </th>
              </tr>
            </thead>

            <tbody>
            {Array.isArray(currentData) && currentData?.map((team,i) => 
              <tr
                style={{
                  height: "48px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontFamily: "teko",
                  fontWeight: "bold",
                  fontSize: "32px",
                  background: "rgba(216, 216, 216, 0.3)",
                }}
              >
                <th
                  style={{
                    padding: "0px",
                    background: "rgba(158, 158, 158, 0.7)",
                    color: "white",
                  }}
                  scope="row"
                >
                 {i+1}
                </th>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "0px",
                  }}
                >
                  <div
                    style={{
                      width: "112px",
                      background: "rgba(256,256,256,0.7",
                      padding: "0px",
                    }}
                  >
                    <img
                      height="38.78px"
                      width="38.78px"
                      src={tournamentData?.logo}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "41px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{}}>
                      <img
                        height="30px"
                        width="35px"
                        style={{ padding: "3px", marginLeft: "5px" }}
                        src={team?.logo}
                        alt=""
                      />
                    </div>
                    <h2
                      style={{
                        fontFamily: "teko",
                        position: "relative",
                        top: "7px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {team?.name}
                    </h2>
                    {""}
                  </div>
                </td>

                <td style={{ padding: "0px" }}>{i+1}</td>
                <td style={{ padding: "0px" }}>{pointTable[team?.rank]} </td>
                <td style={{ padding: "0px" }}>{team?.kills} </td>
                <td style={{ padding: "0px" }}> {team?.points[selectedMatchId] || team?.points }</td>
              </tr>
                 )}
            </tbody>
          </table>
        </div>
        </div>
{/* <div>
      {sortTeams?.length? 
              <div className=" mt-4 full">
              <h1 className='text-xl font-bold text-white text-center'> Page  No: {currentPage} </h1>
             <div className='flex justify-center mt-4'>
             <button
                onClick={previousPageHandlar}
                disabled={currentPage === 1}
                className="mr-2 px-3 py-2 rounded-lg bg-rose cursor-pointer disabled:hover:text-white hover:text-slate-300 text-white disabled:bg-gray-400"
              >
                <span> Standing 1 </span>
              </button>
              <button
                onClick={nextPageHandlar}
                disabled={currentPage === totalPages}
                className="px-6 py-2 rounded-lg hover:text-slate-300 disabled:hover:text-white bg-rose cursor-pointer text-white disabled:bg-gray-400"
          >
            <span> Standing 2 </span>
           
          </button>
             </div>
            </div>
              : 
              <h2 className='text-2xl font-bold text-white '> No Tournament data </h2>
            }
  
    </div> */}
      </>
      
      
      
             
                 
    );
};

export default StandingTable;





