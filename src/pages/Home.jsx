import React from 'react';
import Header from '../components/Header/Header';
import Metrics from '../components/Metrics/Metrics';
import Gallery from '../components/Gallery/Gallery';
import FAQ from '../components/FAQ/FAQ';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';
import News from '../components/News/News';
import Plans  from '../components/Plans/Plans';
import Client from '../components/Client/Client';
import Video from '../components/Video/Video';
import About from '../components/About/About';


const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Metrics />
      <Gallery />
      <FAQ />
      <News />
      <Plans />
      <Team />
      <Client />
      <Video />
      <About />
      <Contact />
    </div>
  );
};

export default Home;