import React from 'react';
import '../../../src/assets/Style/Banner.css';
import AddTournamentModal from './AddTournamentModal';
import '../../assets/Style/ButtonStyle.css'
import { FaPlus } from 'react-icons/fa';
import DefaultLayout from '../../Layout/DefaultLayout';
const Banner = ({children}) => {
    return (
       <DefaultLayout>
         <div id='tournament-banner' >
            {/* <div className='w-9/12 '>
             <div className='w-full border border-dotted h-80 border-gray-700 mt-5 px-4 py-3'>
             <h3 className=' font-semibold text-3xl text-neutral-100'> Tournament List : </h3>
             
             </div>
            </div>
            <div className='w-1/5 '>
            <div className='mt-5'>
            <label htmlFor="my_modal_6" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Add Tournament </label>
            </div>
            <AddTournamentModal/>
            </div> */}
            {children}
        </div>
       </DefaultLayout>
    );
};

export default Banner;