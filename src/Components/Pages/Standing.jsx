import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import '../../assets/Style/style.css'
import { AuthContext } from '../../Context/AuthProvider';
import StandingTable from '../Utilities/StandingTable';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';

const Standing = () => {
  const navigate = useNavigate()
    //const  tournamentId = 64a9811459adef7a8d9fc300 
    const {selectedTournamentId,selectedStageId,selectedMatchId} = useContext(AuthContext)
    const [tournamentData,setTournamentData] = useState({})
    const [stageData,setStageData] = useState({})
    const [matchData,setMatchData] = useState([])
    const [teamData,setTeamData] = useState({});
    // get tournament data by tournament id  
    if(selectedTournamentId == null && selectedStageId  == null){
     toast.error("Please  click display then select  tournament and group")
    }
    useEffect(()=> {
    if(selectedTournamentId){
      const FetchTournamentById = async () => {
        try{
          const response = await fetch(`http://localhost:8000/tournaments/${selectedTournamentId}`)
          const result = await response.json();
          setTournamentData(result[0])
          
        }catch(error){
          console.log(error)
        }
      }
      FetchTournamentById()
    }
     
    },[selectedTournamentId])

    // get stage data by stage id 
    useEffect(()=> {
    if(selectedStageId){
      const FetchStageById = async () => {
        try{
          const response = await fetch(`http://localhost:8000/stages/${selectedStageId}`)
          const result = await response.json();
          setStageData(result[0])
          
        }catch(error){
          console.log(error)
        }
      }
      FetchStageById()
    }
    },[selectedStageId])


    // get match data by stage id 
    useEffect(()=> {
     if(selectedStageId){
      const FetchMatchById = async () => {
        try{
          const response = await fetch(`http://localhost:8000/matches?stage-id=${selectedStageId}`)
          const result = await response.json();
          setMatchData(result)
        }catch(error){
          console.log(error)
        }
      }
      FetchMatchById()
     }
    },[selectedStageId])

// get team data by match id 
useEffect(()=> {
  if(selectedMatchId){
    const FetchTeamByMatchId = async () => {
      try{
        const response = await fetch(`http://localhost:8000/standings/match?match-id=${selectedMatchId}`)
        const result = await response.json();
        setTeamData(result)
        
      }catch(error){
        console.log(error)
      }
    }
    FetchTeamByMatchId()
  }
   
  },[selectedMatchId])


    return (
        <DisplayLayout>
            <div className='bg-linear-rose'>
                {/* Top section  */}
              <section className='grid grid-cols-4'>
              <div className='col-span-1 bg-slate-600 mx-auto'>
                 <img src={tournamentData?.logo} className='w-28 h-24 '/>
                </div>
                
                <div className='col-span-3  px-2'>
                  <div className='flex justify-between flex-row-reverse'>
                  <h1 className='text-4xl text-center font-semibold'> <span className='text-yellow-400'> {stageData?.name} </span>:  {stageData?.match}/{matchData?.length} </h1>
                  <h1 className='text-4xl text-center uppercase font-semibold text-yellow-400'> {tournamentData?.name}   </h1>
                  </div>
                  <h1 className='text-5xl font-bold uppercase text-white text-start'> Match Standing  </h1>
                </div>
              </section>
              
              {/* Team section  */}
              <section className='grid grid-cols-3 gap-x-4'>
                {/* Who is best team in the match  */}
                <div className='col-span-1'>
                <div style={{width:"360px" ,position:"relative"}} className='mx-auto' >
         
                <img 
                style={{position:"absolute",zIndex:1}}
                    className='h-96'
                    src={''}
                    alt="" />
                <div className='bg-thin-rose'
                    style={{height:"400px",width:"360px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",}}>

                </div>

                <div className='bg-rose'
                    style={{height:"67px",fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"center",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
                    <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}> Name </h2>
                </div>
               </div>
             </div>

                {/* Show other team from #2  */}
            <div className='  col-span-2 px-2'>
                <StandingTable data={teamData}  />
            </div>
          </section>



            </div>
        </DisplayLayout>
    );
};

export default Standing;