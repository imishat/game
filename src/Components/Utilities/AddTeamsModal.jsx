import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { FaTimes } from "react-icons/fa";



const AddTeamsModal = ({refetch}) => {
  const closeButton = useRef();
  const handleAddTeams = (e) => {
    e.preventDefault()
    const form = e.target ;
    const name = form.teamName.value ;
    const tag = form.tag.value ;
    const logo = form.logo.value ;
    const playerOne = form.playerOne.value ;
    const playerOneImg = form.playerOnePhoto.value ;
    const playerTwo = form.playerTwo.value ;
    const playerTwoImg = form.playerTwoPhoto.value;
    const playerThree = form.playerThree.value ;
    const playerThreeImg = form.playerThreePhoto.value ;
    const playerFour = form.playerFour.value ;
    const playerFourImg = form.playerFourPhoto.value ;
    const playerFive = form.playerFive.value ;
    const playerFiveImg = form.playerFivePhoto.value ;
  
    const AddTeam = {name,tag,logo,players:[
      {
        name:playerOne,
        kills:[],
        playerImg: playerOneImg
      },
      {
        name:playerTwo,
        kills:[],
        playerImg:playerTwoImg
      },
      {
        name: playerThree,
        kills:[],
        playerImg:  playerThreeImg
      },
      {name:playerFour,
        kills:[],
       playerImg:playerFourImg
      },
      {
       name:  playerFive,
       kills:[],
       playerImg: playerFiveImg
      }
    ]}
    // console.log(AddTeam)
  
    fetch(`http://localhost:8000/teams`,{
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(AddTeam)
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
        <input type="checkbox" id="add_tournament_modal" className="modal-toggle" />
         <div className="modal">
         <div className="modal-box ">
         <div className='flex justify-between items-center'>
         <h1 className='text-3xl font-semibold  mb-1'> Add Teams Details  </h1>
         <label htmlFor="add_tournament_modal" ref={closeButton} className="bg-rose-600 text-white px-5 text-xl py-1  rounded-sm hover:bg-rose-700 cursor-pointer"> <FaTimes className=' border border-spacing-2'/> </label>
         </div>
        

            <form action="" onSubmit={handleAddTeams} className='border-2 border-slate-200 px-5  mt-2 pb-6 rounded-md font-medium'>
             <div className='flex flex-col '>
             <label> Team Name  </label>
             <input type="text" name='teamName' placeholder="Team name" className="input  border-gray-300 w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Team tag</label>
                <input type="text" name='tag' placeholder="Team tag" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Team Logo  </label>
             <input type="url" name='logo' placeholder="Team logo" className="input border-gray-300 w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 1 Name</label>
                <input type="text" name='playerOne' placeholder="Player 1 name " className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 1 Photo </label>
             <input type="url" name='playerOnePhoto' placeholder="Player 1 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>

              <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 2 Name</label>
                <input type="text" name='playerTwo' placeholder="Player 2 name" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 2 Photo </label>
             <input type="url" name='playerTwoPhoto' placeholder="Player 2 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>

             <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 3 Name </label>
                <input type="text" name='playerThree' placeholder="Player 3 name " className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 3 Photo </label>
             <input type="url" name='playerThreePhoto' placeholder="Player 3 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>

             <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 4 Name  </label>
                <input type="text" name='playerFour' placeholder=" Player 4 name" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 4 Photo </label>
             <input type="url" name='playerFourPhoto' placeholder="Player 4 Photo url" className="input border-gray-300 w-full mt-1" />
             </div>
             
             <div className='flex flex-col mt-4'>
                <label htmlFor=""> Player 5 Name </label>
                <input type="text" name='playerFive' placeholder=" Player 5 name" className="input border-gray-300 w-full mt-1 " />
              </div>

              <div className='flex flex-col mt-4'>
             <label> Player 5 Photo </label>
             <input type="url" name='playerFivePhoto' placeholder="Player 5 Photo url" className="input border-gray-300 w-full mt-1" />
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