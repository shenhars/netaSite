import NavBar from './NavBar/NavBar';
import AboutSec from "./AboutSection/AboutSec";
import ShowsSec from "./ShowsSection/ShowsSec";
import MusicSec from "./MusicSection/MusicSec";
import SocialSec from './SocialSection/SocialSec';
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <AboutSec />
      <ShowsSec />
      <MusicSec />
      <SocialSec />
    </>
  );
}

export default App;
