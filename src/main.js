import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import IvuLocs from './components/ivu-locs';
import Vehicles from './pages/vehicles';
import NavBar from './components/nav-bar';

const Main = () => {
    return (
    //BrowserRouter is the router implementation for HTML5 browsers
    //Link enables Routes on an anchor tag
    //Switch returns only the first matching route rather than all
    //Route is the conditionally shown component //based on matching a path to a URL
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ivu-locs" element={<IvuLocs />} />
                <Route path="/vehicles" element={<Vehicles />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Main;
