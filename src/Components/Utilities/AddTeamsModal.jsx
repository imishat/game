import React from 'react';
import { FaTimes } from "react-icons/fa";

const AddTeamsModal = () => {
    return (
        <div>
        <input type="checkbox" id="add_tournament_modal" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box ">
         <div className='flex justify-between items-center'>
         <h1 className='text-3xl font-semibold  mb-1'> Add Teams Details  </h1>
         <label htmlFor="add_tournament_modal" className="bg-rose-600 text-white px-5 text-xl py-1  rounded-sm hover:bg-rose-700 cursor-pointer"> <FaTimes className=' border border-spacing-2'/> </label>
         </div>
        

            <form action="" className='border-2 border-slate-200 px-5  mt-2 pb-6 rounded-md font-medium'>
             <div className='flex flex-col '>
             <label> Team Name  </label>
             <input type="text" name='teame-name' placeholder="Team name" className="input  border-gray-300 w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Team tag</label>
                <input type="url" name='team-tag' placeholder="Team tag" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Team Logo  </label>
             <input type="text" name='team-logo' placeholder="Team logo" className="input border-gray-300 w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 1 Name</label>
                <input type="url" name='player-1' placeholder="Player 1 name " className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 1 Photo </label>
             <input type="text" name='player-1-photo' placeholder="Player 1 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 2 Name</label>
                <input type="url" name='player-2' placeholder="Player 2 name" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 2 Photo </label>
             <input type="text" name='player-2-photo' placeholder="Player 2 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>

             <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 3 Name </label>
                <input type="url" name='player-3' placeholder="Player 3 name " className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 3 Photo </label>
             <input type="text" name='player-3-photo' placeholder="Player 3 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>

             <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 4 Name  </label>
                <input type="url" name='player-4' placeholder=" Player 4 name" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 4 Photo </label>
             <input type="text" name='player-4-photo' placeholder="Player 4 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>
             
             <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 5 Name </label>
                <input type="url" name='player-5' placeholder=" Player 5 name" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 5 Photo </label>
             <input type="text" name='player-5-photo' placeholder="Player 5 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>
             
            
            <div className="modal-action">
            <label htmlFor="add_tournament_modal" className="bg-rose-500 text-white px-4 py-1 rounded-md hover:bg-rose-600 cursor-pointer"> Close </label>
             <input type='submit' value={'Submit'} className='px-4 py-1 border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer' />
            </div>
            </form>
           
           </div>
          </div>    
        </div>
    );
};

export default AddTeamsModal;