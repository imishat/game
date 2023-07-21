import React, { useContext, useEffect, useState } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import TopFraggerCard from '../Utilities/TopFraggerCard';
import '../../assets/Style/style.css';
import  '../../assets/Style/BackgroundStyle.css'
import { AuthContext } from '../../Context/AuthProvider';

const TopFregger = () => {
    const {selectedMatchId,selectedStageId} = useContext(AuthContext)
    const [bestPlayers,setBestPlayers] = useState([])
    const [noData,setNoData] = useState('');
    const [matchData,setMatchData] = useState([]) ;
    const [stageData,setStageData] = useState({})


// get best three players by match id 
useEffect(()=> {
    if(!selectedMatchId){
        setNoData("No Data, Please select tournament and match number")
      
    }else{
        const FetchThreeBestPlayers = async () => {
            try{
              const response = await fetch(`http://localhost:8000/standings/fragger?match-id=${selectedMatchId}`)
              const result = await response.json();
              setBestPlayers(result)
            //   console.log(result,'best players')
              
            }catch(error){
              console.log(error)
            }
          }
          FetchThreeBestPlayers()
    }
     
    },[selectedMatchId])
  
 
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

        
    return (
        <DisplayLayout>
            <div className='bg-orange-100'>
           <section className='grid grid-cols-4 '>
            {/* Left side  */}
          <div className='col-span-3'>
          <div className='h-17 w-full  bg-style text-white grid  grid-cols-3'>
           <h1 className='text-4xl text-center font-bold uppercase col-span-2'> Star Of the <span className='text-yellow-500'> match </span> </h1>
           
           <div className='h-17 animated-background col-span-1'>
           <h1 className='text-3xl font-bold'> LEAGUE STAGE  </h1>
           <h3 className='text-2xl font-bold'> Match no: {stageData?.match}/{matchData?.length} </h3>
           
           </div>
           </div>

           <div>
            <h1 className='font-bold text-2xl text-center text-red-500'> {noData} </h1>
           <div className='grid grid-cols-3 gap-y-6 justify-between py-5'>
                {bestPlayers?.slice(0,3).map((player) => <TopFraggerCard key={player?._id} player={player} selectedMatchId={selectedMatchId} > </TopFraggerCard>)}
            </div>
           </div>
          </div>

          {/* right side  */}
          <div className='columns-1  bg-orange-50'>

          </div>

           </section>
           
            </div>
        </DisplayLayout>
    );
};

export default TopFregger;