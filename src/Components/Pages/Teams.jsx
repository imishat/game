import React from 'react';
import Banner from '../Utilities/Banner';
import ListItems from '../Utilities/ListItems';
import { FaPlus } from 'react-icons/fa';
import FindTeamsModal from '../Utilities/FindTeamsModal';
import { useQuery } from 'react-query';

const Teams = () => {
const {data, isLoading, error, refetch} = useQuery('teams', async ()  => {
    const response = await fetch('http://localhost:8000/teams')
    return response.json()
    
})
// console.log(data)
    return (
        <Banner> 
        <div className='flex justify-around'>
           <div className='w-9/12 '>
            <div className='w-full border border-dotted h-[80vh] overflow-y-scroll  border-gray-700 mt-5 px-4 pb-10 pt-3'>
            <h3 className=' font-semibold text-3xl text-neutral-100'> Teams  : </h3>
            {/* {data?.map((group) => <ListItems key={group?._id} groupStage={group}> </ListItems>)} */}
            </div>
           </div>
           <div className='w-1/5 '>
           <div className='mt-5'>
           <label htmlFor="find_teams_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Find Teams </label>
           </div>
           <FindTeamsModal data={data} isLoading={isLoading}/>
           </div>
       </div>
      </Banner>
    );
};

export default Teams;