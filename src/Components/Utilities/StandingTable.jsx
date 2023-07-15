import React from 'react';
import '../../assets/Style/style.css'
const StandingTable = ({data}) => {
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
                    {data?.map((team, index) => (
                        <tr key={index} className='h-10 border border-sky-400 '>
                            <th className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> # {team?.inputRank}   </th>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1 w-[400px]'> {team?.name} </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> {team?.place} </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1 cursor-pointer '> {team?.totalPoints} </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> {team?.kills} </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> {team?.totalRank} </td>

                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default StandingTable;