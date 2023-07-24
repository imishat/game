import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import DisplayHeader from '../Components/Utilities/DisplayHeader';

const DisplayLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <DisplayHeader/>
           <div className='  px-1'>
           {children}
           </div>
        </div>
    );
};

export default DisplayLayout;