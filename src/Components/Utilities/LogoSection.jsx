import React from 'react';
const LogoSection = ({ stageData,tournamentData}) => {

    return (
        <div className="flex justify-between items-start mt-6 ">
        {/* Logo */}
        <div className="">
         { tournamentData &&  
         <div className="flex items-start gap-x-5">

         <div className="relative ">
         <img src={tournamentData?.logo} className=" w-36 h-36" alt="" />  
         </div>
           <div className='flex flex-col' >
           <span className="text-[64px]  leading-[70.4px] tracking-wide italic  font-semibold" > {tournamentData?.name} </span>
           <span className="text-[#141EF2] text-[60px]">
           SHOWDOWN</span> 
           </div>
            </div>

         }
        </div>

        <div className=" leading-[72px] ">
         {tournamentData ?
           <h2 className="text-[64px] font-rubik uppercase tracking-wide  text-[#141EF2] ">
           Top Fragger  
          </h2>
       :
       <h2 className="text-[64px] font-rubik uppercase tracking-wide  text-[#141EF2] ">
       Over all Top Fragger  
      </h2>
        }
          {tournamentData &&  
          <h4 className="text-[44px] uppercase font-semibold  ">  Match No: 01 </h4>

          }
      </div>
   

        {/* Powered by area */}
        <div className="flex items-center gap-5 text-[#0F1316]">
          {/* associated PARTNER */}
          <div className="flex items-center gap-3 text-center flex-col w-40 h-24">
            <img src="../src/assets/images/images/discord.png" alt="" />
            <p className="uppercase w-full text-xl">associated Partner</p>
          </div>
          {/* Powered by */}
          <div className="flex items-center gap-3 text-center flex-col  w-40 h-24">
            <img src="../src/assets/images/images/power-logo.png" alt="" />
            <p className="uppercase w-full text-xl">POWERED BY</p>
          </div>
        </div>
      </div>
    );
};

export default LogoSection;