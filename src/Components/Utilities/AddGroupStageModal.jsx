import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';


const AddGroupStageModal = ({tournamentId,refetch}) => {
  const closeButton = useRef()
  const handleAddGroupStage = (e) => {
   e.preventDefault();
   const groupStageName = e.target.groupStage.value ;
   const matchNumer = e.target.matchNumber.value ;
   const groupStage = {name:groupStageName, match:matchNumer , 'tournament-id':tournamentId}
   

   fetch(`https://gaming-production-ashrafullislam.vercel.app/stages`,{
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(groupStage)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data)
    if(data.success === true){
     toast.success('Group stage successfully  added')
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
          <input type="checkbox" id="add_group_stage_modal" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box pt-2 pb-4 px-6  ">
           <div className=' '>
           <h1 className='text-3xl font-semibold  mb-1 mt-0'> Add Group Details  </h1>
             <hr className='w-full h-2 text-gray-600' />
           <form action="" onSubmit={handleAddGroupStage} className=' px-4 pb-3 mt-4 border-2 border-slate-200 rounded-md'>
             
              <h3 className='text-xl '> Add Group Stage </h3>

             <div className='flex flex-col mt-4'>
             <label> Group Stage:  </label>
             <input type="text" name='groupStage' placeholder="Group stage" className="input input-bordered w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Number of Match : </label>
                <input type="number" name='matchNumber' placeholder=" Number of match" className="input input-bordered w-full mt-1 " />
              </div>
            
            <div className="modal-action">
            <label ref={closeButton} htmlFor="add_group_stage_modal" className="bg-rose-500 text-white px-4 py-1 rounded-md hover:bg-rose-600 cursor-pointer"> Close </label>
             <input type='submit' value={'Submit'} className='px-4 py-1 border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer' />
            </div>
            </form>
           </div>
           
           </div>
          </div>  
        </div>
    );
};

export default AddGroupStageModal;