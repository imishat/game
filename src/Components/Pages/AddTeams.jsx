import React from 'react';
import AddTeamsModal from '../Utilities/AddTeamsModal';
import DefaultLayout from '../../Layout/DefaultLayout';
import { FaPlus } from 'react-icons/fa';

const AddTeams = () => {
    return (
        <DefaultLayout>
         <section className='px-4' id='background-style'>
            {/* top section  */}
            <div className='flex justify-between pt-3'>
                <div>
                    <h1 className='text-3xl font-semibold text-white'> All Teams </h1>
                </div>

                <div className=''>
                <label htmlFor="add_tournament_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center m-0 px-4 font-bold"> <FaPlus/> Add Teams </label>
                <AddTeamsModal/>
                </div>
            </div>

            {/* card section  */}
            <section>

            </section>
         </section>
        </DefaultLayout>
    );
};

export default AddTeams;