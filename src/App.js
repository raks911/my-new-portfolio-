import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/AboutMe/About';
import Skills from './components/skills/skills';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
function App(){
  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Skills' element={<Skills />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </Router>
    </>
  )
}
export default App;