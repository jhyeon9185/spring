import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className='Header'>
            <h3 className='header-title'>오늘 날짜 (●'◡'●)</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

export default Header;