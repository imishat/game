import React from 'react';

const SingleStylishCard = ({player}) => {
    console.log(player)
return (
<div>
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
</div>
);
};

export default SingleStylishCard;