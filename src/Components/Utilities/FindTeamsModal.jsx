import { React, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const FindTeamsModal = ({data,isLoading,matchId , setRandom }) => {
  const closeButton = useRef();
  const [selectedIds,setSelectedIds] = useState([])
  const [filterdTeam,setFilterdTeam] = useState([])

  const handleCheckbox = (e) => {
    const teamsId = e.target.value ;
    const isChecked = e.target.checked ;
    if(isChecked){
      setSelectedIds([...selectedIds,teamsId])
    }
  }

// console.log('teams modal', matchId)
  console.log(data)
  const handleFindGroup = async(e) => {
   e.preventDefault();
   console.log(selectedIds)
   const teamId = {'teams':selectedIds, 'match-id':matchId}
   try{
     const response = await fetch(`http://localhost:8000/matches/add-team`,{
      method: "Post",
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(teamId)
    
     })
     if(!response.ok){
       throw new Error (" Failed to filter teams by id ")
     }
     else setRandom(Math.random())
     const filterTeamData = await response.json();
     setFilterdTeam(filterTeamData)
   }catch(err){
    console.error(err)
   }
  
  }
  
  console.log(filterdTeam)
  if(isLoading){
    return <div> Loading ...  </div>
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
            {data?.map((teams) => ( <div key={teams?._id}>
              <input onChange={handleCheckbox} type='checkbox' checked={selectedIds.includes(teams._id)}  value={teams?._id}  className='' />
              <label> {teams?.name} </label>
               </div>)
            )}
               

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