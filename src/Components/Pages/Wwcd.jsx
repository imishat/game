import React from 'react';
import DefaultLayout from '../../Layout/DefaultLayout';
import SingleStylishCard from '../Utilities/SingleStylishCard';
import '../../assets/Style/BackgroundStyle.css'
const Wwcd = () => {
    const FakeData = [
        {   
            id:1,
            name:'Marsisco',
            img:'https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=604&height=604' 

        },
        {   
            id: 2,
            name:'Risban',
            img:'https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=604&height=604' 

        }, 
         {   
            id: 3,
            name:'Marsisco',
            img:'https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=604&height=604' 

        }
    ]

    return (
        <DefaultLayout>
           <section id='wwcd-background' className='' >
           <h1> WWCD </h1>
            <div className='px-4 grid lg:grid-cols-3 mt-5 '>
                {FakeData.map((player,i) =>   <SingleStylishCard key={i} player={player} /> )}
                
              
            </div>
           </section>
        </DefaultLayout>
    );
};

export default Wwcd;