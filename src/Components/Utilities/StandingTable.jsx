import React, { useEffect, useState } from 'react';
import '../../assets/Style/style.css'
const StandingTable = ({data}) => {
    console.log(data ,'team data')
    const [teams,setTeams] = useState([])
    useEffect(()=> {
     setTeams(Object.keys(data).map((team)=> (data[team]))
     )
    },[data])
  
    console.log(teams,'teams')
    return (
        <div>
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
                   
                        <tr key={data?._id} className='h-10 border border-sky-400 '>
                            <th className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> #   </th>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1 '> {data?.name} </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1 cursor-pointer '>  </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'>  </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> </td>

                        </tr>
                   


                </tbody>
            </table>
        </div>
    );
};

export default StandingTable;