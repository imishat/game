import React from 'react';
import DisplayLayout from '../../Layout/DisplayLayout';
import StandingTable from '../Utilities/StandingTable';

const OverallStanding = () => {
    return (
       <DisplayLayout>
        <div>
            <h1 className='text-4xl  text-center '> Overall Standing </h1>
            <StandingTable/>
        </div>
       </DisplayLayout>
    );
};

export default OverallStanding;