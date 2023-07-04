import React from 'react';
import Banner from '../Utilities/Banner';
import ListItems from '../Utilities/ListItems';
import { FaPlus } from 'react-icons/fa';
import FindTeamsModal from '../Utilities/FindTeamsModal';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import TeamKillsCard from '../Utilities/TeamKillsCard';

const Teams = () => {
const {id} = useParams()
const {data, isLoading, error, refetch} = useQuery('teams', async ()  => {
    const response = await fetch('http://localhost:8000/teams')
    return response.json()
    
})

// find all matches 
const {data:matches = [], } = useQuery('matches', async ()  => {
    const response = await fetch(`http://localhost:8000/matches/${id}`)
    return response.json()
    
})





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

          
           <div className='w-full  grid grid-cols-3  mt-5 px-4 pb-10 pt-3'>
           {matches?.map((team) => team?.teams?.map((teamData,i) => <TeamKillsCard key={i} team={teamData} > </TeamKillsCard> ))}
           </div>
           
       

           <div className='w-1/5 '>
          
           <FindTeamsModal data={data} isLoading={isLoading} matchId={id} />
           </div>
       </div>
      </Banner>
    );
};

export default Teams;