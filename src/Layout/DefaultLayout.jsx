import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Banner from '../Components/Needful/Banner';

const DefaultLayout = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default DefaultLayout;