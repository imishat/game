import React, { useContext, useEffect, useState} from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Utilities/Loading';
import { useQuery } from 'react-query';
import TopFraggerCard from '../Utilities/TopFraggerCard';
import LogoSection from '../Utilities/LogoSection';

const OverAllTopFragger = () => {
  const {selectedTournamentId,  selectedMatchId , selectedStageId} = useContext(AuthContext)
  const {data ,error,isLoading, refetch} = useQuery('overall', fetchOverAllData);

//  fetch  Tournament data 
 async function fetchOverAllData()  {
     if(selectedTournamentId){
      const response = await fetch(`http://localhost:8000/standings/overall-topfragger?groupId=${selectedStageId}`)
      
     if(!response.ok){
         throw new Error('Failed to fetch  overall data')
     }
     refetch()
     return response.json() ;
     }
 }


// console.log(data)
 if(isLoading){
  return <Loading/>
}  

if(error){
  return <div> Error: {error.message} </div>
}

//  sort data largest kills to 

    return (
      <DisplayLayout>  
         <div className="w-full relative  mx-auto">
        {/* bg frame right */}
        <img
          className="absolute right-0"
          src=""
        />
        {/* bg image */}
        <div
          className={``}
        >
         {/* Logo section */}
         <LogoSection   />
         {/* Card section */}
         <TopFraggerCard  players={data}  />
        </div>
      </div>
      </DisplayLayout>
    );
};

export default OverAllTopFragger;