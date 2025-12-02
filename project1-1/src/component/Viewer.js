import React, {} from 'react';

const Viewer = (props) => {

    console.log("Viewer")
    
    return (
        <div className='counter-title'>
            <div>현재 카운터 </div>
            <h1>{props.co}</h1>
        </div>
    );
};

export default Viewer;