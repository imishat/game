import React, { Children } from 'react';
import Navbar from '../Components/Shared/Navbar';

const DefaultLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
             {children}
        </div>
    );
};

export default DefaultLayout;