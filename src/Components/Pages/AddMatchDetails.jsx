import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Banner from '../Needful/Banner';
import AddMatchDetailsModal from '../Needful/AddMatchDetailsModal';

const AddMatchDetails = () => {
    return (
        <Banner> 
         <div className='flex justify-around'>
            <div className='w-9/12 '>
             <div className='w-full border border-dotted h-80 border-gray-700 mt-5 px-4 py-3'>
             <h3 className=' font-semibold text-3xl text-neutral-100'> Match List : </h3>
             
             </div>
            </div>
            <div className='w-1/5 '>
            <div className='mt-5'>
            <label htmlFor="add_match_modal" className="btn-style flex items-center cursor-pointer gap-2 justify-center"> <FaPlus/> Add Group  </label>
            </div>
            <AddMatchDetailsModal/>
            </div>
        </div>
       </Banner>
    );
};

export default AddMatchDetails;