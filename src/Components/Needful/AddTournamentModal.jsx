import React from 'react';

const AddTournamentModal = () => {
    return (
        <div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box ">
            <form action="" className='border border-blue-500 px-5  mt-8 pb-6 rounded-md'>
             <h1 className='text-3xl font-semibold mt-3 mb-1'> Add Tournament  </h1>

             <div className='flex flex-col'>
             <label> Tournament Name  </label>
             <input type="text" name='tournament-name' placeholder="Tournament name" className="input input-bordered w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Tournament Logo Url </label>
                <input type="url" name='tournament-logo-url' placeholder="Tournament logo url" className="input input-bordered w-full mt-1 " />
              </div>
            
            <div className="modal-action">
            <label htmlFor="my_modal_6" className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 cursor-pointer"> Close </label>
             <input type='submit' value={'Submit'} className='px-4 py-2 border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer' />
            </div>
            </form>
           
           </div>
          </div>     
        </div>
    );
};

export default AddTournamentModal;