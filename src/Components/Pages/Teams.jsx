import React, { useEffect, useState } from 'react';
import Banner from '../Utilities/Banner';
import ListItems from '../Utilities/ListItems';
import { FaPlus } from 'react-icons/fa';
import FindTeamsModal from '../Utilities/FindTeamsModal';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import TeamKillsCard from '../Utilities/TeamKillsCard';
import Loading from '../Utilities/Loading';

const Teams = () => {
const [matches,setMatches] = useState([])

const [random,setRandom]  = useState(Math.random()) // refetch data and update  dom
const {id} = useParams()
const {data, isLoading, error} = useQuery('teams', async ()  => {
    const response = await fetch('https://gaming-production-ashrafullislam.vercel.app/teams')
    return response.json()
    
})


// get match by group id 
useEffect(() => {
    fetch(`https://gaming-production-ashrafullislam.vercel.app/matches/${id}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data,'matches data')
        setMatches(data)
    })
}
,[random])

// console.log(matches,'matches')

if(isLoading){
    return <Loading/>
}

// console.log(data)
    return (
        <Banner> 
        <div className=''>
           <div className='flex justify-between'>
            <h3 className=' font-semibold text-3xl text-neutral-100 mt-2'> Teams  : </h3>
            <div className='mt-2'>
            <label htmlFor="find_teams_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Find Teams </label>
            </div>
            </div>

          
           <div className='w-full  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 px-4 pb-10 pt-3'>
           {matches?.map((team) => team?.teams?.map((teamData,i) => <TeamKillsCard key={i} team={teamData}  matchId={team._id}  > </TeamKillsCard> ))}
           </div>
           
       

           <div className='w-1/5 '>
          
           <FindTeamsModal data={data} isLoading={isLoading} matchId={id} setRandom={setRandom}/>
           </div>
       </div>
      </Banner>
    );
};

export default Teams;