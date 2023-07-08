import React from 'react';
import AddTeamsModal from '../Utilities/AddTeamsModal';
import DefaultLayout from '../../Layout/DefaultLayout';
import { FaPlus } from 'react-icons/fa';
import { useQuery } from 'react-query';
import PlayerCard from '../Utilities/PlayerCard';
import '../../assets/Style/BackgroundStyle.css'
import Loading from '../Utilities/Loading';

const AddTeams = () => {
    const {data,isLoading, error, refetch} = useQuery('teams', async () => {
        const response = await fetch(`https://pubg-gaming-backend.onrender.com/teams`)
        if(!response.ok){
         throw new  Error('Failed to fetch teams data')
        }
        return response.json()
    })
    if(isLoading){
        return <Loading/>
    }
    if(error){
        return <div> {error.message} </div>
    }
    // console.log(data)

    return (
        <DefaultLayout>
         <section className='px-4 min-h-[50vh] max-h-fit pb-10' id='animated-background' >
            {/* top section  */}
            <div className='flex justify-between pt-3'>
                <div>
                    <h1 className='text-3xl font-semibold text-white'> All Teams </h1>
                </div>
              
                <div className=''>
                <label htmlFor="add_tournament_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center m-0 px-4 font-bold"> <FaPlus/> Add Teams </label>
                <AddTeamsModal refetch={refetch}/>
                </div>
            </div>

            {/* card section  */}
            <section className='mt-5 relative'>
            <div className='grid lg:grid-cols-3 xxl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  '>
                {data?.map((players) => <PlayerCard key={players._id} players={players}> </PlayerCard>)}

             </div>
            </section>
         </section>
        </DefaultLayout>
    );
};

export default AddTeams;