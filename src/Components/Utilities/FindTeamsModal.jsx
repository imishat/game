import React, { useRef } from 'react';

const FindTeamsModal = () => {
    const closeButton = useRef()
  const handleFindGroup = (e) => {
   e.preventDefault();
//    const groupStageName = e.target.groupStage.value ;
//    const matchNumer = e.target.matchNumber.value ;
//    const groupStage = {name:groupStageName, match:matchNumer , 'tournament-id':tournamentId}
   

//    fetch(`http://localhost:8000/stages`,{
//     method: "Post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body:JSON.stringify(groupStage)
//    })
//    .then(res => res.json())
//    .then(data => {
//     console.log(data)
//     if(data.success === true){
//      toast.success('Group stage successfully  added')
//      e.target.reset()
//      refetch()
//      closeButton.current.click();
//     }
//    })
//    .catch(error => {
//     console.error(error)
//    })


  }
    return (
        <div>
                 <input type="checkbox" id="find_teams_modal" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box pt-2 pb-4 px-6  ">
           <div className=' '>
           <h1 className='text-3xl font-semibold  mb-1 mt-0'> Add Teams Details   </h1>
             <hr className='w-full h-2 text-gray-600' />
           <form action="" onSubmit={handleFindGroup} className=' px-4 pb-3 mt-4 border-2 border-slate-200 rounded-md'>
            <div>
                <div>
                <input name={'bangladesh'} type='checkbox'/>
                <label htmlFor=""> Bangladesh</label>
                </div>

                <div>
                <input name={'india'} type='checkbox'/>
                <label htmlFor=""> India</label>
                </div>

                <div>
                <input name={'mombai'} type='checkbox'/>
                <label htmlFor=""> Mombai </label>
                </div>

                <div>
                <input name={'kolkata'} type='checkbox'/>
                <label htmlFor=""> Kolkata </label>
                </div>

                <div>
                <input name={'chennai'} type='checkbox'/>
                <label htmlFor=""> Chennai  </label>
                </div>

                <div>
                <input name={'delhi'} type='checkbox'/>
                <label htmlFor=""> Delhi </label>
                </div>
            </div>  
           
            <div className="modal-action">
            <label ref={closeButton} htmlFor="find_teams_modal" className="bg-rose-500 text-white px-4 py-1 rounded-md hover:bg-rose-600 cursor-pointer"> Close </label>
             <input type='submit' value={'Submit'} className='px-4 py-1 border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer' />
            </div>
            </form>
           </div>
           
           </div>
          </div>  
        </div>
    );
};

export default FindTeamsModal;