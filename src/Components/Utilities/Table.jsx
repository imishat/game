import React from 'react';
import '../../assets/Style/Table.css'
const Table = () => {
    

    return (
    
         <div className="flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead className="text-white">
				<tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left"> Rank  </th>
					<th className="p-3 text-left">  Team Name </th>
					<th className="p-3 text-left">  Place  </th>
					<th className="p-3 text-left">  Rank Pts </th>
					<th className="p-3 text-left" > Elims </th>
					<th className="p-3 text-left" > Total Pts </th>
				</tr>
		
			</thead>


			<tbody className="flex-1 sm:flex-none">
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 ">contato@johncovv.com</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 ">Delete</td>
				</tr>
			
           
			</tbody>
		</table>
	</div>

        </div>
    );
};

export default Table;