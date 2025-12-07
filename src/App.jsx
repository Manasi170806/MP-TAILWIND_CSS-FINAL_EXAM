import './App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import SpeakerDetail from "./components/Speakerdetail";
import Decepticonf from './components/Decepticonf.jsx'
import Speakers from './components/Speakers.jsx'
import Schedule from './components/Schedule.jsx';
import April456 from './components/April456.jsx';
import Sponsorships from './components/Sponsorships.jsx';
import Signup from './components/Signup.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Decepticonf />
      <Routes>
        <Route path="/" element={<Speakers />} />
        <Route path="/speaker/:id" element={<SpeakerDetail/>} />
      </Routes>
      <Schedule />
      <April456 />
      <Sponsorships />
      <Signup />
      <Footer />

    </>
  )
}

export default App

