import React from "react";
import "./Home.scss";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import Partners from "../../components/Home/Partners/Partners";
import AnvogueOnInstagram from "../../components/Home/AnvogueOnInstagram/AnvogueOnInstagram";
import WhatPeopleAreSaying from "../../components/Home/WhatPeopleAreSaying/WhatPeopleAreSaying";
import WhatWeOffer from "../../components/Home/WhatWeOffer/WhatWeOffer";
import BestAndNewShop from "../../components/Home/BestAndNewShop/BestAndNewShop";
import BestShop from "../../components/Home/BestShop/BestShop";
import WhatsNews from "../../components/Home/WhatsNews/WhatsNews";
import Banner from "../../components/Home/Banner/Banner";
import ExploreCollections from "../../components/Home/ExploreCollections/ExploreCollections";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Banner />
      <WhatsNews />
      <ExploreCollections />
      <BestShop />
      <BestAndNewShop />
      <WhatWeOffer />
      <WhatPeopleAreSaying />
      <AnvogueOnInstagram />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
