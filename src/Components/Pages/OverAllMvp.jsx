import React, { useContext } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Utilities/Loading';

const OverAllMvp = () => {
    const {selectedTournamentId} = useContext(AuthContext)
    const {data ,error,isLoading, refetch} = useQuery('overall', fetchOverAllData);
    if(isLoading){
       return <Loading/>
    }  
  
    if(error){
       return <div> Error: {error.message} </div>
    }
  
   // fetch  Tournament data 
   async function fetchOverAllData()  {
       if(selectedTournamentId){
        const response = await fetch(`http://localhost:8000/standings/overall?tournament-id=${selectedTournamentId}`);
       if(!response.ok){
           throw new Error('Failed to fetch  overall data')
       }
       refetch()
       return response.json() ;
       }
   }
  console.log(data)
    return (
        <DisplayLayout>  
         <div>
            <h1 className='text-4xl text-center'> Overal  MVP </h1>
         </div>
        </DisplayLayout>
    );
};

export default OverAllMvp;