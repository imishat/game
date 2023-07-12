import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import DisplayHeader from '../Components/Utilities/DisplayHeader';

const DisplayLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <DisplayHeader/>
            {children}
        </div>
    );
};

export default DisplayLayout;