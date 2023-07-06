import React from 'react';

const Loading = () => {

    return (
        <div className='flex justify-center mt-20 ' >
            <span className="loading loading-ring loading-xs text-slate-900 "></span>
            <span className="loading loading-ring loading-sm text-slate-900 "></span>
            <span className="loading loading-ring loading-md text-slate-900 "></span>
            <span className="loading loading-ring loading-lg text-slate-900 "></span>
       </div>
    );
};

export default Loading;