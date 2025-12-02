/* eslint-disable */
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => { 

    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("sort"));
    console.log(searchParams.get("page"));

    return (
        <div>
            
        </div>
    );

};

export default Home;