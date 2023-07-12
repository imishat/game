import React from 'react';
import '../../../src/assets/Style/Banner.css';
import '../../assets/Style/ButtonStyle.css'
import DefaultLayout from '../../Layout/DefaultLayout';
const Banner = ({children}) => {
    return (
       <DefaultLayout>
         <div id='tournament-banner' >
           
            {children}
        </div>
       </DefaultLayout>
    );
};

export default Banner;