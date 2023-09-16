import React, { useContext, useEffect, useState } from 'react'


import DisplayLayout from '../../Layout/DisplayLayout'
import { AuthContext } from '../../Context/AuthProvider'
import bg from '../../assets/images/images/bg.png';
import miramar from "../../assets/images/images/miramar.jpg";
import shanok from "../../assets/images/images/shanak.jpg";
import vikendi from "../../assets/images/images/vikendi.jpg";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
function Coming() {
   const {selectedMatchId,
    selectedStageId,selectedTournamentId,selectedMatchData,setSelectedMatchId,setSelectedStageId,setSelectedTournamentid} = useContext(AuthContext)
   
   const [tournamentData, setTournamentData] = useState({});
  const [stageData, setStageData] = useState({});
  const [matchData, setMatchData] = useState([]);
  
 
  const match = matchData.find(item => item._id === selectedMatchId);






  const [searchParams] = useSearchParams();

  

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
  
    if (selectedTournamentId) {
      axios.get(`http://localhost:8000/tournaments/${selectedTournamentId}`)
        .then(res => {
          setTournamentData(res.data[0]);
        })
        .catch(error => {
          // Handle error here
          console.error(error);
        });
    }
  
    if (selectedStageId) {
      axios.get(`http://localhost:8000/stages/${selectedStageId}`)
        .then(res => {
          setStageData(res.data[0]);
        })
        .catch(error => {
          // Handle error here
          console.error(error);
        });
    }
  
    if (selectedStageId) {
      axios.get(`http://localhost:8000/matches?stage-id=${selectedStageId}`)
        .then(res => {
          setMatchData(res.data);
        })
        .catch(error => {
          // Handle error here
          console.error(error);
        });
    }
  }, [searchParams, setSelectedMatchId, setSelectedStageId, setSelectedTournamentid,selectedTournamentId, selectedStageId]);
  


  return (
   <>
   <DisplayLayout>
     {/* <section className=' bg-[teal] pb-3'>
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
            
    </section> */}


{/* <div
        style={{
            background:"black",
          height: "231px",
          display: "flex",
          flexDirection:"column",
          marginTop:"100px"
          // alignItems: "center",
        }}
      >
       <h2 style={{  position: "relative", left: "0px", color: "white", fontSize: "290px", fontFamily: "teko", marginTop: "-5px", marginLeft: "-25px", WebkitTextStrokeWidth: "1px", top:"-267px",
  WebkitTextStrokeColor: "white",
  color: "transparent",opacity:"67%"}}>
        COMING NEXT MAP
      </h2>
        <img
          style={{ position: "relative", left: "70px",top:"-385px" }}
          width="300px"
          src="https://media.discordapp.net/attachments/1067392894236905472/1086146168792305675/logo400.png"
          alt=""
        />
       <div style={{width:"1121px",position:"relative",left:"445px",top:"-595px",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",fontFamily:'teko',fontWeight:"700px",justifyContent:"space-between",width:"839px"}} >
        <h2 style={{fontSize:"40px"}}>PUBG MOBILE BATTLE OF THOUGHT SEASON 1</h2>
        <div style={{backgroundColor:"#187d5d",borderRadius:"4px",padding:"0px 10px"}}>

        <h2 style={{fontSize:"40px"}}>QUALIFY ROUND M1/16</h2>
        </div>

        </div>
        <h2 style={{fontFamily:"teko",fontWeight:"700",fontSize:"176px",marginTop:"-42px"}}>COMING NEXT MAP</h2>
       </div>
      </div> */}
      <div style={{marginTop:"66px",marginLeft:"344px",clipPath:"polygon(0% 0%, 97.35% 0%, 100% 4.42%, 100% 33.98%, 99.23% 36.71%, 99.23% 51.47%, 100% 52.21%, 100% 100%, 74.57% 100%, 72.7% 97.49%, 31.89% 97.49%, 30.14% 100%, 1.95% 100%, 0% 96.31%)",width:"1250px"}}>
  <div style={{clipPath:"polygon(0% 7.37%, 2.92% 0.25%, 53.9% 0.45%, 55.28% 3.43%, 79.94% 3.43%, 82.59% 0%, 99.86% 0.25%, 99.86% 49.88%, 98.61% 52.33%, 98.74% 60.93%, 100% 62.64%, 100% 94.1%, 97.46% 100%, 0% 100%, 0% 80.59%, 2.55% 78.54%, 2.55% 48.16%, 0% 44.23%)",border:"5px solid #25e9ab",overflow: "hidden"}}>
  <img 
         
         className='mt-10'
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
  </div>
</div>

    </DisplayLayout>
   </>
  )
}

export default Coming