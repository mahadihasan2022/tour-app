import React from 'react';
import Banner from '../../Share/Banner/Banner';
import CurrentPackage from '../../Share/CurrentPackage/CurrentPackage';
import UpcomingEvent from '../../Share/UpcomingEvent/UpcomingEvent';
import BestResort from '../../Share/BestResort/BestResort';


const Home = () => {
    return (
        <div>
            <Banner/>
            <CurrentPackage/>
            <UpcomingEvent/>    
            <BestResort/>    
        </div>
    );
};

export default Home;