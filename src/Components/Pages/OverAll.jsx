import React, { useContext} from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Utilities/Loading';
import { useQuery } from 'react-query';

const OverAll = () => {
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

// console.log(data,'')
    return (
      <DisplayLayout>  
        <div>
            <h1 className='text-4xl'> Over All</h1>
            <h2> {data?.length} </h2>
        </div>
      </DisplayLayout>
    );
};

export default OverAll;