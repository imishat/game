import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddTournamentModal = ({refetch}) => {
  const closeButton = useRef()
  const handleAddTournaments = (e) => {
   e.preventDefault();
   const tournamentName = e.target.tournament_name.value ;
   const tournamentLogo = e.target.tournament_logo_url.value ;
   const Tournament = {name:tournamentName,logo:tournamentLogo}
   fetch('https://gaming-production-aakmk4dvq-ashrafullislam.vercel.app/tournaments',{
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(Tournament)
   })
   .then(res => res.json())
   .then(data => {
    if(data.success === true){
     toast.success('Tournament successfully  added')
     e.target.reset()
     refetch()
     closeButton.current.click();
    }
   })
   .catch(error => {
    console.error(error)
   })
  }


    return (
        <div>
          
         <input type="checkbox" id="add_tournament_modal" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box ">
            <form onSubmit={handleAddTournaments} action="" className='border-2 border-slate-200 px-5  mt-8 pb-6 rounded-md'>
             <h1 className='text-3xl font-semibold mt-3 mb-1'> Add Tournament  </h1>

             <div className='flex flex-col'>
             <label> Tournament Name  </label>
             <input type="text" name='tournament_name' placeholder="Tournament name" required className="input input-bordered w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Tournament Logo Url </label>
                <input type="url" name='tournament_logo_url' placeholder="Tournament logo url" required className="input input-bordered w-full mt-1 " />
              </div>
            
            <div className="modal-action">
            <label htmlFor="add_tournament_modal" ref={closeButton} className="bg-rose-500 text-white px-4 py-1 rounded-md hover:bg-rose-600 cursor-pointer"> Close </label>
             <input type='submit' value={'Submit'} className='px-4 py-1 border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer' />
            </div>
            </form>
           
           </div>
         </div> 
          
       
        </div>
    );
};

export default AddTournamentModal;