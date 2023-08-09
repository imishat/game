import React from 'react';

const MvpCard = ({selectedMatchId,bestPlayer, tournanmentData,  OverallBestPlayer}) => {
  console.log(bestPlayer)
    return (
        <div>
            
           
            {/* {BestPlayer  && 
              <div className='bg-linear-rose pb-6 flex justify-center lg:gap-x-14 '>
             
            <div className=''>
            
  
              <div className='leading-none text-start ml-4'>
              <h1 className='text-4xl font-bold my-0 py-0 px-2'>  Event most valueable player  </h1>
              <h1 className='lg:text-[15rem] font-bold my-0 py-0 '> MVP </h1>
              <h1 className='lg:text-4xl font-bold bg-rose py-1 lg:w-11/12 rounded-tl-[15px] px-2 '> {BestPlayer?.name} || Kills <span className='text-yellow-500 text-4xl italic font-bold'>  {BestPlayer?.kills} </span> </h1>       
           
              <div className='bg-thin-rose lg:w-11/12 mt-4 px-2'
              style={{height:"67px", fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"start",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
              <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}> Destination  </h2>
             </div>  
              </div>
            </div> 
            
          
            <div className=''>
              
              { <div  className='w-10/12 h-full flex items-end'>
               <img src={BestPlayer?.playerImg} className='w-80 h-80 bg-transparent'/>
              </div> }
            </div>
               </div>
              } */}
           
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
                    src={tournanmentData?.logo}
                    className="-z-10 w-36  h-36"
                    alt=""
                  />
                </div>
                <div className="text-[64px]   ">
                  <span className='font-rubik'> {tournanmentData?.name} </span>
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
                  
                  <h2 className="uppercase text-[40px]">   <span className='text-blue-700'> {bestPlayer?.at(0)?.kills?.[selectedMatchId]} </span>
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
                  <h2 className='text-[40px]'> 0 </h2>
                  <h2 className="uppercase text-[40px]"> Contribution </h2>
                </div>
                {/* result */}
              
              </div>

              </div>
            </div>
            {/* Player imgage  */}
            <div className="  absolute top-0   right-0 h-full">
              <img
                src={bestPlayer?.at(0)?.playerImg}
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

export default MvpCard;