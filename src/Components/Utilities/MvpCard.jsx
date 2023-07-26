import React from 'react';

const MvpCard = ({selectedMatchId,bestPlayer, BestPlayer}) => {
    return (
        <div>
             {bestPlayer && selectedMatchId &&
              <div className='bg-linear-rose pb-6 flex justify-center lg:gap-x-14 '>
              {/* left side  */}
            <div className=''>
            <div>
              <img src='' className='w-16 h-16 bg-blue-500 ml-3 ' alt='Tournament logo' />
              </div>
  
              <div className='leading-none text-start ml-4'>
              <h1 className='text-4xl font-bold my-0 py-0 px-2'>  Event most valueable player  </h1>
              <h1 className='lg:text-[15rem] font-bold my-0 py-0 '> MVP </h1>
              <h1 className='lg:text-4xl font-bold bg-rose py-1 lg:w-11/12 rounded-tl-[15px] px-2 '> {bestPlayer?.at(0)?.name} || Kills <span className='text-yellow-500 text-4xl italic font-bold'>  {bestPlayer?.at(0)?.kills?.[selectedMatchId]} </span> </h1>       
           
              <div className='bg-thin-rose lg:w-11/12 mt-4 px-2'
              style={{height:"67px", fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"start",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
              <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}> Destination  </h2>
             </div>  
              </div>
            </div> 
            
            {/* right side  */}
            <div className=''>
              
              { <div  className='w-10/12 h-full flex items-end'>
               <img src={bestPlayer?.at(0)?.playerImg} className='w-80 h-80 bg-transparent'/>
              </div> }
            </div>
              </div>
             }
            {/*  */}
           
            {BestPlayer  && 
              <div className='bg-linear-rose pb-6 flex justify-center lg:gap-x-14 '>
              {/* left side  */}
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
            
            {/* right side  */}
            <div className=''>
              
              { <div  className='w-10/12 h-full flex items-end'>
               <img src={BestPlayer?.playerImg} className='w-80 h-80 bg-transparent'/>
              </div> }
            </div>
               </div>
              }
        </div>
    );
};

export default MvpCard;