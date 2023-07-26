import React from 'react';

const OverallTable = ({data}) => {

  

    return (
        <div> 
            {data &&
               <table className=" w-full whitespace-nowrap text-white ">
                {/* head*/}
                <thead className=''>
                    <tr className='border'>
                      
                        <th className='bg-thin-rose  border-2 rounded-tl-sm   py-3 rounded-bl-sm  font-extrabold'> Rank </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Team Name  </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Place  </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Rank  Pts  </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Elims </th>
                        <th className='bg-thin-rose  border-2 font-extrabold  py-3'> Total pts  </th>
                    
                    </tr>
                </thead>
                <tbody className='border font-semibold body-col    '>
                    {/* row 1 */}
                    {Array.isArray(data) && data?.map((team) =>   <tr key={team?._id} className='h-10 border border-sky-400 '>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> #   </td>
                            <td className=' h-10  bg-rose border-2 border-slate-300 py-0 text-center m-1'> 
                            <td> <img src={team?.playerImg} className='w-8 h-10 mr-3'/> </td>
                            <td className=''>  {team?.name} </td>
                              </td>

                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> {} </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1 cursor-pointer '>  </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'> {team?.kills}  </td>
                            <td className='h-10 bg-rose border-2 border-slate-300 py-0 text-center px-0  m-1'>  </td>

                        </tr> )}
                      
                </tbody>
            </table> 
            }
        </div>
    );
};

export default OverallTable;