import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../assets/Style/style.css'
import Loading from './Loading';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const DisplayHeader = () => {
  const { 
    setSelectedTournamentid,
    setSelectedStageId,
    setSelectedMatchId,
    selectedStageId,
    selectedMatchId,
    setSelectedMatchData,

   } = useContext(AuthContext);
  const [tournamentId,setTournamentId] = useState(null)
  const [stageData,setStageData] = useState([]);
  const [stageId, setStageId]  = useState(null)
  const [matches,setMatches] = useState([]);
  const [matchId,setMatchId] = useState(null);
  const [matchData,setMatchData] = useState([])
  const navigate = useNavigate()

  const {data:tournaments ,error,isLoading, refetch} = useQuery('tournaments',fetchTournament); //  tournament data 



 // fetch  Tournament data 
 async function fetchTournament()  {
     const response = await fetch(`http://localhost:8000/tournaments`);
     if(!response.ok){
         throw new Error('Failed to fetch  tournament Data')
     }
     return response.json() ;
 }

 // get groupStage by tournamentid  
 useEffect(()=> {
  if(tournamentId){
    fetch(`http://localhost:8000/stages?tournament-id=${tournamentId}`)
  .then(res => res.json())
  .then(data => {
    setStageData(data)
  })
  }
},[tournamentId])

 // get match by stageid  
 useEffect(()=> {
  if(stageId){
    fetch(`http://localhost:8000/matches?stage-id=${stageId}`)
  .then(res => res.json())
  .then(data => {
    setMatches(data)
    // console.log(data,'matches')

  })
  }
},[stageId])


//  tournament  select handlar 
const handleFilterGroup = (e) => {
  const selectedTournament = (e.target.value) ;
  setTournamentId(selectedTournament)
  setSelectedTournamentid(selectedTournament)
  navigate(`/${e.target.value}`)
}


// Select  group handlar 
const handleFilterMatch = (e) => { 
  const selectedGroupId = (e.target.value); 
  setStageId(selectedGroupId)
  setSelectedStageId(selectedGroupId)
}

// select match handlar 
const handleMatch = (e) => {
  const selectedMatch = e.target.value ;
  setMatchId(selectedMatch);
  setSelectedMatchId(selectedMatch)
}


  // get match data by stage id 
  useEffect(()=> {
    if(selectedStageId){
     const FetchMatchById = async () => {
       try{
         const response = await fetch(`http://localhost:8000/matches?stage-id=${selectedStageId}`)
         const result = await response.json();
         setMatchData(result)
       }catch(error){
         console.log(error)
       }
     }
     FetchMatchById()
    }
   },[selectedStageId])

   function getMatchData (matchData, selectedMatchId) {
    return matchData?.find((item)  => item?._id === selectedMatchId)
   }
   setSelectedMatchData(getMatchData(matchData, selectedMatchId))  


if(isLoading){
  return <Loading/>
}  
if(error){
  return <div> Error: {error.message} </div>
}

    return (
        <div className='mt-5 '>
          {/* dropdown section  */}
          <section className='flex w-full  justify-between px-6'>
            <div>
              <label  className='text-2xl  font-semibold'>  Select Tournament: </label>
              <select className='text-xl border hover:cursor-pointer'  value={tournamentId} onChange={handleFilterGroup}> 
                <option disabled selected> Select Tournament </option>
                {tournaments?.map((tournament) => <option  key={tournament._id} value={tournament?._id} >
                 {/* <Link to={`/${tournament?._id}`} className='cursor-pointer'> {tournament.name} </Link> */}
                 {tournament?.name}
                  </option> )}
              </select>
            </div>

            <div>
              <label className='text-2xl font-semibold'>  Select Group  </label>
              <select className='text-xl border hover:cursor-pointer' value={stageId} onChange={handleFilterMatch} > 
                <option disabled selected> Select Group </option>
                {stageData?.map((stage) => <option key={stage?._id} value={stage?._id} > {stage?.name} </option> )} 
              </select>
            </div>

            <div>
              <label className='text-2xl font-semibold'>  Select Match  </label>
              <select className='text-xl border hover:cursor-pointer'  value={matchId} onChange={handleMatch}> 
                <option disabled selected> Select Match  </option>
                {matches?.map((match) => <option key={match?._id} value={match?._id} > 
                  M.No {match?.matchNo} 
                 </option>)}
              </select>
            </div>
          </section>


         <div  className="flex  text-xl px-1 mt-4 justify-center ">
           <NavLink to={`/${tournamentId}/standing`} className='text-neutral-50   px-2 py-1 bg-style rounded-sm'>  STANDING</NavLink>
           <NavLink to={'/topfragger'} className='text-neutral-50   px-2 py-1 bg-style rounded-sm'>  Top Fragger</NavLink>
           <NavLink to={'/mvp'} className='text-neutral-50   px-2 py-1 bg-style rounded-sm'>  MVP</NavLink>
           <NavLink to={'/schedul'} className='text-neutral-50   px-2 py-1 bg-style rounded-sm'>  SCHEDULE </NavLink>
           <NavLink to={'/next'} className='text-neutral-50   px-2 py-1 bg-style rounded-sm'>  Next </NavLink>
           <NavLink to={'/overall-topfragger'} className='text-neutral-50   px-2 py-1 bg-style rounded-sm'>  OverAll Top Fragger </NavLink>
           <NavLink to={'/overall-mvp'} className='text-neutral-50   px-2 py-1 bg-style rounded-sm'>  OverAll MVP </NavLink>
           <NavLink to={'/overall-standing'} className='text-neutral-50   px-2 py-1 bg-style rounded-sm '>  Overall Standing </NavLink>
         </div>
        </div>
    );
};

export default DisplayHeader;