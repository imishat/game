import React from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import TopFraggerCard from '../Utilities/TopFraggerCard';
import '../../assets/Style/style.css';
import  '../../assets/Style/BackgroundStyle.css'

const Fraggers = [
    {
        id:  1,
        name: "Hasib",
        kills: 4,
        photo:'https://sb.kaleidousercontent.com/67418/960x550/199bd5e8dc/photographers-removebg-1.png'
    },
    {
        id:  2,
        name: "Rovert",
        kills: 5,
        photo:'https://sb.kaleidousercontent.com/67418/960x550/199bd5e8dc/photographers-removebg-1.png'
    },
    {
        id:  3,
        name: "Roki",
        kills: 7,
        photo:'https://sb.kaleidousercontent.com/67418/960x550/199bd5e8dc/photographers-removebg-1.png'
    }

]
const TopFregger = () => {
    return (
        <DisplayLayout>
            <div className='bg-orange-100'>
          
           <section className='grid grid-cols-4 '>
            {/* Left side  */}
          <div className='col-span-3'>
          <div className='h-17 w-full  bg-style text-white grid  grid-cols-3'>
           <h1 className='text-4xl text-center font-bold uppercase col-span-2'> Star Of the <span className='text-yellow-500'> match </span> </h1>
           <div className='h-17 animated-background col-span-1'>
           <h1 className='text-3xl font-bold'> LEAGUE STAGE  </h1>
           <h3 className='text-2xl font-bold'> Match no:  </h3>
           </div>
           </div>

           <div className='grid grid-cols-3  py-5'>
                {Fraggers.map((fragger) => <TopFraggerCard key={fragger?.id} fragger={fragger} > </TopFraggerCard>)}
            </div>
          </div>

          {/* right side  */}
          <div className='columns-1  bg-orange-50'>

          </div>

           </section>
           
            </div>
        </DisplayLayout>
    );
};

export default TopFregger;