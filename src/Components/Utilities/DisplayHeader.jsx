import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/Style/style.css'
const DisplayHeader = () => {
    return (
        <div className='mt-5 '>
          {/* dropdown section  */}
          <section className='flex w-full  justify-between px-6'>
            <div>
              <label className='text-2xl  font-semibold'>  Select Tournament: </label>
              <select className='text-xl border hover:cursor-pointer'> 
                <option disabled selected> Select Tournament </option>
                <option> First Tournment </option>
                <option> First Tournament </option>
              </select>
            </div>

            <div>
              <label className='text-2xl font-semibold'>  Select Group  </label>
              <select className='text-xl border hover:cursor-pointer'> 
                <option disabled selected> Select Group </option>
                <option> First Group </option>
                <option> First Group </option>
              </select>
            </div>

            <div>
              <label className='text-2xl font-semibold'>  Select Match  </label>
              <select className='text-xl border hover:cursor-pointer'> 
                <option disabled selected> Select Match  </option>
                <option> First  Match  </option>
                <option> First Match </option>
              </select>
            </div>
          </section>



         <div  className=" flex justify-between flex-wrap text-xl px-4 mt-4 ">
           <NavLink to={'/standing'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  STANDING</NavLink>
           <NavLink to={'/top-fragger'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  Top Fragger</NavLink>
           <NavLink to={'/mvp'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  MVP</NavLink>
           <NavLink to={'/display'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  Display </NavLink>
           <NavLink to={'/schedul'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  SCHEDULE </NavLink>
           <NavLink to={'/next'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  Next </NavLink>
           <NavLink to={'/overall'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  OverAll </NavLink>
           <NavLink to={'/overall-mvp'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  OverAll MVP </NavLink>
           <NavLink to={'/overall-standing'} className='text-neutral-50   px-4 py-2 bg-style rounded-sm'>  Overall Standing </NavLink>
         </div>
        </div>
    );
};

export default DisplayHeader;