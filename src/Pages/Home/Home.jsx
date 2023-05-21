import React from "react";
import Banner from "../../Share/Banner/Banner";
import CurrentPackage from "../../Share/CurrentPackage/CurrentPackage";
import UpcomingEvent from "../../Share/UpcomingEvent/UpcomingEvent";
import BestResort from "../../Share/BestResort/BestResort";
import Explore from "../../Share/Explore/Explore";

const Home = () => {
  return (
    <div>
      <Banner />
      <CurrentPackage />
      <UpcomingEvent />
      <BestResort />
      <Explore />
    </div>
  );
};

export default Home;
