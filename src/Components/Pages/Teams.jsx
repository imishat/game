import React, { useEffect, useState } from 'react';
import Banner from '../Utilities/Banner';
import ListItems from '../Utilities/ListItems';
import { FaPlus } from 'react-icons/fa';
import FindTeamsModal from '../Utilities/FindTeamsModal';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import TeamKillsCard from '../Utilities/TeamKillsCard';
import Loading from '../Utilities/Loading';
import supabase from '../../../config/supabase-client';
import { toast } from 'react-hot-toast';

const Teams = () => {
const [matches,setMatches] = useState([])
const [random,setRandom]  = useState(Math.random()) // refetch data and update  dom
const [teamData,setTeamData] = useState({matchId:'',teams:[]})
const [playerDead,setPlayerDead] = useState({})
const [totalsKills,setTotalsKills]=useState({})

const {id} = useParams()
const {data, isLoading, refetch, error} = useQuery('teams', async ()  => {
    const response = await fetch('http://localhost:8000/teams')
    return response.json()
    
})
    const [matchData, setMatchData] = useState({
        matchId: id,
        teams: matches?.at(0)?.teams?.map(i => {
            const newI = structuredClone(i)
            return newI
        })
    })

    // console.log(matches?.at(0), 'asd')

// get match by group id 
useEffect(() => {
    fetch(`http://localhost:8000/matches/${id}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data,'matches data')
        setMatches(data)
        refetch()
    })
}
,[random])

// console.log(matches,'matches')
useEffect(()  => {
const teams = structuredClone(teamData)
teams.matchId = matches?.at(0)?._id ;
teams.teams = matches?.at(0)?.teams ;
setMatchData({
        matchId: id,
        teams: matches?.at(0)?.teams?.map(i => {
            const newI = structuredClone(i)
            newI.players = i?.players?.map(j => {
                const obj = structuredClone(j)
                // console.log(j?._id, matches?.at(0)?.dead)
                obj.dead = matches?.at(0)?.dead?.includes(j?._id)
                return obj
            })
            return newI
        })
    })
},[matches])


if(isLoading){
    return <Loading/>
}


//copy url function 
const copyLinkHanlder = () => {
    const sharableLink = `http://localhost:5173/wwcd/${id}`;
    navigator.clipboard.writeText(sharableLink);

    toast.success("Link has been copied!")

  }

// console.log(data)
    return (
        <Banner> 
        <div className=''>
           <div className='flex justify-between'>
            <h3 className=' font-semibold text-3xl text-neutral-100 mt-2'> Teams  : </h3>
            <div className='mt-2'>
            <label htmlFor="find_teams_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Find Teams </label>

            <button className='btn btn-primary text-white cursor-pointer ' onClick={copyLinkHanlder }> Live Match </button>
            </div>
            </div>

          
           <div className='w-full  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 px-4 pb-10 pt-3'>
           {matches?.map((team) => team?.teams?.map((teamData,i) => {
            // console.log(teamData)
            return <TeamKillsCard key={i}
            matchData={matchData}
            setMatchData={setMatchData}
            team={teamData} 
             matchId={team._id} 
              matches={matches}
               refetch={refetch}
                playerDead={playerDead} 
                setPlayerDead={setPlayerDead}
                 mID = {id}
                 totalsKills={totalsKills}
                 setTotalsKills={setTotalsKills}
                  > </TeamKillsCard>
           } ))}
           </div>
           
       

           <div className='w-1/5 '>
          
           <FindTeamsModal data={data} isLoading={isLoading} matchId={id} setRandom={setRandom}/>
           </div>
       </div>
      </Banner>
    );
};

export default Teams;