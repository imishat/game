import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Eelemination from './Eelemination';

const WwcdTeams = ({deadData}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [showBackdrop, setShowBackdrop] = useState(false);

console.log(filteredData,"fillter")
      useEffect(() => {
        if (deadData.dead === 4) {
           
         setFilteredData(deadData)
          setShowBackdrop(true);
       
    
          const timeout = setTimeout(() => {
            setShowBackdrop(false);
          }, 3000); // 3 seconds
    
          // Clear the timeout if the component unmounts or dead value changes
          return () => clearTimeout(timeout);
        }
      }, [deadData.dead,deadData.teamName]);
    return (
      <>
      
    {
      showBackdrop && <Eelemination filteredData={filteredData}></Eelemination>
    }
        <section className="mt-2">
        
        
        <li className={`text-start px-2 w-full h-8 bg-thin-rose mt-1 border border-yellow-300 text-white font-bold flex justify-between items-center gap-4 relative`}>
        <span className={` ${deadData.dead===4 && 'absolute z-50 w-full left-0 top-0 h-full backdrop-blur-sm   backdrop-opacity-90'}`}></span>
       <div  className="flex items-center justify-between w-full">
       <div className="avatar">
<div className="w-9 h-6">
<img  src={deadData.temeLogo} />
</div>
</div>
        
   {deadData?.teamName  || "NO Name"}
      {deadData?.dead === 0 ? (
        <div className="flex gap-1 items-center">
          <div className="h-3 rounded-md w-2 bg-white"></div>
          <div className="h-3 rounded-md w-2 bg-white"></div>
          <div className="h-3 rounded-md w-2 bg-white"></div>
          <div className="h-3 rounded-md w-2 bg-white"></div>
        </div>
      ) : deadData?.dead === 1 ? (
        <div className="flex items-center gap-1">
          <div className="h-3 rounded-md w-2 bg-white"></div>
          <div className="h-3 rounded-md w-2 bg-white"></div>
          <div className="h-3 rounded-md w-2 bg-white"></div>
          <div className="h-3 rounded-md w-2 bg-orange-500"></div>
        </div>
      ) : deadData?.dead === 2 ? (
        <div className="flex items-center gap-1">
          <div className="h-3 rounded-md w-2 bg-white"></div>
          <div className="h-3 rounded-md w-2 bg-white"></div>     <div className="h-3 rounded-md w-2 bg-orange-500"></div>     
          
          <div className="h-3 rounded-md w-2 bg-orange-500"></div>
        </div>
      ) : deadData?.dead === 3 ? (
         <div className="flex items-center gap-1">
          <div className="h-3 rounded-md w-2 bg-white"></div>     
          <div className="h-3 rounded-md w-2 bg-orange-500"></div>

          <div className="h-3 rounded-md w-2 bg-orange-500"></div>
          <div className="h-3 rounded-md w-2 bg-orange-500"></div>
        </div>
      ) : (
         <div className="flex gap-1 items-center">
         <div className="h-3 rounded-md w-2 bg-orange-500"></div>
          <div className="h-3 rounded-md w-2 bg-orange-500"></div>
          <div className="h-3 rounded-md w-2 bg-orange-500"></div>
          <div className="h-3 rounded-md w-2 bg-orange-500"></div>
     </div>
      )}
    <p>{deadData.kills}</p>

       </div>
    </li>
    </section>
    </>
    );
};

export default WwcdTeams;