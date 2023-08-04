import { Children } from "react";
import { createContext } from "react";
import Loading from "../Components/Utilities/Loading";
import { useQuery } from "react-query";

export  const TournamentContext = createContext();
const TournamentProvider = ({children})  =>  {
      // fetch data using react query 
      const {data = [],error,isLoading, refetch} = useQuery('tournaments',fetchTournament);

      if(isLoading){
         return <Loading/>
      }  
 
      if(error){
         return <div> Error: {error.message} </div>
      }
   
     // fetch  Tournament data 
     async function fetchTournament()  {
         const response = await fetch(`https://pubg-gaming-backend.onrender.com/tournaments`);
         if(!response.ok){
             throw new Error('Failed to fetch  tournament Data')
         }
         return response.json() ;
     }

 return (
    <TournamentContext.Provider value={data} >
        {Children}
    </TournamentContext.Provider>
 )
}
export default TournamentProvider  ;