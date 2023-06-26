import React from 'react';

const AddMatchDetailsModal = () => {
    return (
        <div>
             <input type="checkbox" id="add_match_modal" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box pt-2 pb-4 px-6  ">
           <div className=' '>
           <h1 className='text-3xl font-semibold  mb-1 mt-0'> Add Match Details  </h1>
             <hr className='w-full h-2 text-gray-600' />
           <form action="" className=' px-4 pb-3 mt-4 border-2 border-slate-200 rounded-md'>
             
              <h3 className='text-xl '> Add Group Stage </h3>
              <div className='flex justify-between gap-x-3'>
              <div className='flex flex-col mt-4 w-3/6'>
             <label> Match No   </label>
             <input type="number" name='match-no' placeholder="Match no" className="input input-bordered w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4 w-3/6'>
                <label htmlFor=""> Time  </label>
                <input type="time" name='match-number'  className="input input-bordered w-full mt-1" />
              </div>
              </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Choose  </label>
                <input type="file" name='file-choose' placeholder=" " className="input input-bordered w-full mt-1 " />
              </div>
            
            <div className="modal-action">
            <label htmlFor="add_match_modal" className="bg-rose-500 text-white px-4 py-1 rounded-md hover:bg-rose-600 cursor-pointer"> Close </label>
             <input type='submit' value={'Add Match'} className='px-4 py-1 border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer' />
            </div>
            </form>
           </div>
           
           </div>
          </div> 
        </div>
    );
};

export default AddMatchDetailsModal;