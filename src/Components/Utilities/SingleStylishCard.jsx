import React from 'react';

const SingleStylishCard = ({player, match}) => {
return (
 <div className='mx-auto'>
   {player && 
    <div style={{width:"400px" ,position:"relative"}}
    className='mx-auto'
    >
         
        <img 
           style={{position:"absolute",zIndex:1}}
            className='h-96'
            src={player?.img}
            alt="" />
        <div className='bg-slate-300'
            style={{height:"400px",width:"408px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",}}>

        </div>

        <div className='bg-slate-400'
            style={{height:"67px",fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"center",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
            <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}> {player?.namej}</h2>
        </div>
    </div>
   }

   {match  && 
    <div style={{ position:"relative"}}
    className='mx-auto ' >
         
        

        <div className='bg-rose'
            style={{height:"300px",width:"350px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",}}>
           <div className='py-4 flex flex-col bg-thin-rose text-3xl font-semibold text-center text-slate-100'>
            <h1 className=''> Match No: {match?.matchNo}  </h1>
            <h1 className='text-yellow-500'> Time: {match?.time}  </h1>

           </div>
            <div>
            <img 
           style={{position:"absolute",zIndex:1}}
            className='w-full h-full '
            src={'https://w0.peakpx.com/wallpaper/517/634/HD-wallpaper-pubg-team-with-rifles-pubg.jpg'}
            alt="" />
            </div>
        </div>

        <div className='bg-thin-rose'
            style={{height:"67px",width: '350px' , fontfamily:"teko", zIndex: 10,fontWeight:"600",display:"flex",justifyContent:"center",alignItems:'center',clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
            <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}> {match?.chooseMap}</h2>
        </div>
    </div>
   }


</div>
);
};

export default SingleStylishCard;