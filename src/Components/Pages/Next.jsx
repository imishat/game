import React, { useContext, useEffect } from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import { useQuery } from 'react-query';
import  '../../assets/Style/BackgroundStyle.css' ;
import  '../../assets/Style/style.css'  ;
import { AuthContext } from '../../Context/AuthProvider';

const Next = () => {
  const {selectedMatchId} = useContext(AuthContext)
  // const {data, isLoading, refetch} = useQuery('next', fetchNextMatch)
  // const fetchNextMatch = async () => {
  //    const response = await fetch(`https://pubg-gaming-backend.onrender.com/matches/next`)
  //    if(!response.ok){
  //      throw new Error ('Failed  to fetch next match') 
  //    }
  //    return response.json()

  // }

  useEffect(() => {
    fetch(`https://pubg-gaming-backend.onrender.com/matches/next?match-id${selectedMatchId}`)
    .then(res => res.json())
    .then ( result  => {
      console.log(result)
    })
  },[selectedMatchId])
  // console.log(data,'next fetch')
    return (
      <DisplayLayout>
        <div className='h-[90vh] bg-linear-rose'  >
           <h1 className='font-bold  text-2xl text-yellow-400 pt-4'> Next Match  </h1>
        </div>
      </DisplayLayout>
    );
};

export default Next;