import React from 'react';

const OverAllMVPCard = ({ tournanmentData,tournament, OverallBestPlayer}) => {
 
    return (
        <div>
            
           
          
           
           <div className="w-full relative h-[100vh] mx-auto">
        {/* bg frame right */}
     
        {/* bg image */}
        <div
          className={` z-10 p-11 !pr-14 h-auto`}
        >
          <div>
            <div className=""> 
          
              <div className="flex items-start gap-x-5">
                {/* tournament logo  */}
                <div className="relative ">
                  <img
                    src={tournament?.logo}
                    className="-z-10 w-36  h-36"
                    alt=""
                  />
                </div>
                <div className="text-[64px]   ">
                  <span className='font-rubik'> {tournament?.name} </span>
                  <h2 className='text-[55px] font-rubik text-blue-500'>MVP OF THE MATCH</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[646px]">
              
              <div className="space-y-[72px]">
                {/* Finishes */}
                  <div  className="flex justify-between items-center w-[805px] border-b-[6px] border-[#26BA8E] pl-6 pr-28 relative">
                
                {/* icon */}
                <div  className=" flex items-center justify-center w-[70px] h-[70px] border-[#26BA8E] border-[6px]">
                <span className=" after:bg-[#26BA8E] after:w-8 after:rounded-full after:h-8 after:absolute after:-right-4 after:-bottom-4"></span>
                  <img className="" src={''} alt="" />
                </div>
                {/* title */}
                <div className='flex justify-around gap-x-6 font-semibold'>
                  
                  <h2 className="uppercase text-[40px]">   <span className='text-blue-700'> {OverallBestPlayer?.at(0)?.totalKills} </span>
                   Finished  </h2>
                </div>
                {/* result */}
              </div>

                {/* Rank  */}
                  <div  className="flex justify-between items-center w-[805px] border-b-[6px] border-[#26BA8E] pl-6 pr-28 relative">
                {/* icon */}
                <div  className=" flex items-center justify-center w-[70px] h-[70px] border-[#26BA8E] border-[6px]">
                <span className=" after:bg-[#26BA8E] after:w-8 after:rounded-full after:h-8 after:absolute after:-right-4 after:-bottom-4"></span>
                  <img className="" src={''} alt="" />
                </div>
                {/* title */}
                <div className='flex gap-x-6 font-semibold'>
                  <h2 className='text-[40px]'> {} </h2>
                  <h2 className="uppercase text-[40px]"> Rank </h2>
                </div>
                {/* result */}         
              </div>
            
              
                {/* Contribution */}
                  <div  className="flex justify-between items-center w-[805px] border-b-[6px] border-[#26BA8E] pl-6 pr-28 relative">
                
                {/* icon */}
                <div  className=" flex items-center justify-center w-[70px] h-[70px] border-[#26BA8E] border-[6px]">
                <span className=" after:bg-[#26BA8E] after:w-8 after:rounded-full after:h-8 after:absolute after:-right-4 after:-bottom-4"></span>
                  <img className="" src={''} alt="" />
                </div>
                {/* title */}
                <div className=' flex gap-x-6 font-semibold' >
                  <h2 className='text-[40px]'> {OverallBestPlayer?.contribution ? bestPlayer.contribution.toFixed(2) : 0}%</h2>
                  <h2 className="uppercase text-[40px]"> Contribution </h2>
                </div>
                {/* result */}
              
              </div>

              </div>
            </div>
            {/* Player imgage  */}
            <div className="  absolute top-0   right-0 h-full">
              <img
                src={OverallBestPlayer?.at(0)?.playerImg}
                className=" w-11/12 float-right h-full z-1"
                alt=""
              />
            </div>
          </div>
        </div>
        
      </div>

        </div>
    );
};

export default OverAllMVPCard;