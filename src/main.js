import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LctMsgs from './pages/lct-msgs';
import Contact from './pages/contact';
import IvuLocs from './components/ivu-locs';
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
                <Route path="/" element={<IvuLocs />} />
                <Route path="/lct-msgs" element={<LctMsgs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Main;
