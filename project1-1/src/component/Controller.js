import React, { useEffect } from 'react';

const Controller = ({handleSetCount}) => {

    useEffect( () =>{
        console.log("Controller")
    }, [])

    const handleClick = () => {
        handleSetCount(-1);
    }

    const handleClick2 = () => {
        handleSetCount(-10);
    }

    return (

        <div className='btn-box'>
            <button className='btn' onClick={handleClick}>-1</button>
            <button className='btn' onClick={handleClick2}>-10</button>
            <button className='btn' onClick={ () => handleSetCount(-100)}>-100</button>
            <button className='btn' onClick={ () => handleSetCount(100)}>+100</button>
            <button className='btn' onClick={ () => handleSetCount(10)}>+10</button>
            <button className='btn' onClick={ () => handleSetCount(1)}>+1</button>
        </div>
    );

};

export default Controller;