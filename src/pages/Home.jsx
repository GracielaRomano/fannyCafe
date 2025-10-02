import React from 'react';
import Header from '../components/Header/Header';
import Metrics from '../components/Metrics/Metrics';
import Gallery from '../components/Gallery/Gallery';
import FAQ from '../components/FAQ/FAQ';
import Team from '../components/Team/Team';
import FormContact from '../components/FormContact/FormContact';
import Recent from '../components/Recent/Recent';
import Plans  from '../components/Plans/Plans';
import Client from '../components/Client/Client';
import Video from '../components/Video/Video';
import Article from '../components/Article/Article';
import Opinion from '../components/Opinion/Opinion';
import Service from '../components/Service/Service';


const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Metrics />
      <Gallery />
      <FAQ />
      <Recent />
      <Plans />
      <Team />
      <Client />
      <Video />
      <Article />
      <Opinion />
      <Service />
      <FormContact />
    </div>
  );
};

export default Home;