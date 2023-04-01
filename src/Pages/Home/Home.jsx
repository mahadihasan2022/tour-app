import React from 'react';
import Banner from '../../Share/Banner/Banner';
import CurrentPackage from '../../Share/CurrentPackage/CurrentPackage';
import UpcomingEvent from '../../Share/UpcomingEvent/UpcomingEvent';


const Home = () => {
    return (
        <div>
            <Banner/>
            <CurrentPackage/>
            <UpcomingEvent/>        
        </div>
    );
};

export default Home;