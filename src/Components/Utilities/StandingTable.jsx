import React, { useContext, useEffect, useState } from 'react';
import '../../assets/Style/style.css'
const StandingTable = ({tournamentData,matchData, stageData,  teamData,  selectedMatchId,selectedStageId, selectedTournamentId,teams,selectedMatchData}) => {
  // get maxpoints team 
  const teamArray = teams?.map(item => item?.points[selectedMatchId])
  const maxPoints = Math.max(...teamArray);
  const bestTeam = teams?.find(x => x?.points[selectedMatchId] === maxPoints)
  
  // const data = Array.isArray(teamData)&& teamData?.map(team => console.log(team))
    
    return (
        <div>
            <div className='bg-linear-rose pb-3 lg:px-4'>
                {/* Top section  */}
              <section className='grid grid-cols-4'>
              
               <div className='col-span-1 border-none mb-2 mt-2 mx-auto'>
               <img src={tournamentData?.logo} className='w-28 h-24  '/>
              </div>
             
                
                <div className='col-span-3  px-2'>
                  <div className='flex justify-between flex-row-reverse'>
                  <h1 className='text-4xl text-center font-semibold'> <span className='text-yellow-400'> {stageData?.name} </span>:  {selectedMatchData?.matchNo} / {matchData?.length} </h1>
                  <h1 className='text-4xl text-center uppercase font-semibold text-yellow-400'> {tournamentData?.name}   </h1>
                  </div>
                  <h1 className='text-5xl font-bold uppercase text-white text-start'> Match Standing  </h1>
                </div>
              </section>
              
              {/* Team section  */}
              <section className='grid grid-cols-3 gap-x-4'>
                {/* Who is best team in the match  */}
                <div className='col-span-1'>
                <div style={{width:"100%" ,position:"relative"}} className='mx-auto' >
                 
               
               
                <div className='bg-thin-rose'
                    style={{height:"360px",width:"100%",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",}}>
                  <div className='h-[40vh] flex '>
                {/* { teamData.sort(a, b)=> }    */}
                
                {(bestTeam?.players?.slice(0,4)?.map((img) => <div key={img?._id}
                className='w-full h-[30vh] mt-20'
                >
                <img key={img?._id}
                     style={{position:"absolute",zIndex:1}}
                      className='w-28 h-[26vh]'
                      src={img?.playerImg}
                      alt="" />
                </div>))}
                 
                 </div>

                 <div className='h-[10vh] '>
                   <div style={{fontFamily:'teko'}} className='text-3xl font-bold  h-full flex justify-around items-center bg-rose'> <img src={bestTeam?.logo} className='w-10 h-10 rounded-lg' />  {bestTeam?.name} </div>
                 </div>
                    {/* <h1 className='text-white'> {teamData?.[1]?.points[selectedMatchId]} </h1> */}
                    
                   
                </div>
                 
                <div className='bg-rose px-2 py-1'
                    style={{height:"67px",fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"space-between",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}>Place <span className='text-2xl'> 0 </span> </h2> 
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}> Rank Pts <span className='text-2xl'> 0 </span>  </h2> 
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}> Elims <span className='text-2xl'> 0 </span> </h2> 
                    <h2 style={{fontFamily:"teko",fontWeight:"600", textTransform:'uppercase', display:'flex', flexDirection:'column-reverse', }}> Total Pts <span className='text-2xl'> {bestTeam?.points[selectedMatchId]} </span> </h2> 
                </div>
               </div>
             </div>


                {/* Show other team from   */}
            <div className='  col-span-2 px-2'>
                <table className=" w-full whitespace-nowrap  ">
                {/* head*/}
                <thead className=''>
                    <tr className='border'>
                      
                        <th className='bg-thin-rose  border-2 rounded-tl-sm    py-3 rounded-bl-sm  font-extrabold'> Rank </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3 '> Team Name  </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Place  </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Rank  Pts  </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Elims </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Total pts  </th>
                    
                    </tr>
                </thead>
                <tbody className='border font-semibold body-col    '>
                    {/* row 1 */}
                    {Array.isArray(teamData) && teamData?.map((team,i) =>   <tr key={team?._id} className='h-10 border border-sky-400 '>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> # {team?.rank}  </td>
                            <td className='flex justify-between  items-center h-10 bg-rose border-2 border-slate-300 py-0 text-center m-1'> <img src={team?.logo} className='w-8 h-8 '/> {team?.name} </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1 cursor-pointer '>  </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'>  </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> {team?.points[selectedMatchId]} </td>

                        </tr> )}
                      
                </tbody>
            </table>
            </div>
          </section>



            </div>
        </div>
    );
};

export default StandingTable;