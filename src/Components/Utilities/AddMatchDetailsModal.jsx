import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';

const AddMatchDetailsModal = ({stageid,refetch}) => {
  const closeButton = useRef()
  const handleAddMatch = (e) => {
   e.preventDefault();
   const matchNo = e.target.matchNo.value ;
   const time = e.target.matchTime.value ;
   const chooseMap = e.target.chooseMap.value ;
   const match = {matchNo:matchNo,time:time,chooseMap:chooseMap, 'stage-id':stageid}
   

   fetch(`https://gaming-production-ashrafullislam.vercel.app/matches`,{
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(match)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data)
    if(data.success === true){
     toast.success('Match Details  successfully  added')
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
             <input type="checkbox" id="add_match_modal" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box pt-2 pb-4 px-6  ">
           <div className=' '>
           <h1 className='text-3xl font-semibold  mb-1 mt-0'> Add Match Details  </h1>
             <hr className='w-full h-2 text-gray-600' />
           <form action="" onSubmit={handleAddMatch} className=' px-4 pb-3 mt-4 border-2 border-slate-200 rounded-md'>
             
              <h3 className='text-xl '> Add Group Stage </h3>
              <div className='flex justify-between gap-x-3'>
              <div className='flex flex-col mt-4 w-3/6'>
             <label> Match No   </label>
             <input type="number" name='matchNo' placeholder="Match no" className="input input-bordered w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4 w-3/6'>
                <label htmlFor=""> Time  </label>
                <input type="time" name='matchTime'  className="input input-bordered w-full mt-1" />
              </div>
              </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Choose  </label>
                <select type="file" name='chooseMap' placeholder=" Select" className="select select-bordered w-full mt-1 " >
                  <option  disabled selected  > Choose map ...  </option> 
                  <option value={'erangel'}> ERANGEL   </option>
                  <option value={'miramar'}> MIRAMAR  </option>
                  <option value={'shenok'}> SHENOK  </option>
                  <option value={'vikendi'}> VIKENDI  </option>
                  <option value={'livik'}> LIVIK  </option>
                 
                </select>
              </div>
            
            <div className="modal-action">
            <label htmlFor="add_match_modal" ref={closeButton} className="bg-rose-500 text-white px-4 py-1 rounded-md hover:bg-rose-600 cursor-pointer"> Close </label>
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