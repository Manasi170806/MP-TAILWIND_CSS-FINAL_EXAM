import './App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import SpeakerDetail from "./components/Speakerdetail";
import Decepticonf from './components/Decepticonf.jsx'
import Speakers from './components/Speakers.jsx'

function App() {

  return (
    <>
      <Decepticonf />
      <Speakers />
      <Routes>
        <Route path="/" element={<Speakers />} />
        <Route path="/speaker/:id" element={<SpeakerDetail/>} />
      </Routes>

    </>
  )
}

export default App

