import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*some stylesheet is required to use react-bootstrip components*/
import 'bootstrap/dist/css/bootstrap.min.css';

import LctMsgs from './pages/lct-msgs';
import Contact from './pages/contact';
import Table from './pages/table';
import NavBar from './components/nav-bar';

const tableData = [
    {
        name: 'Amancio Ortega',
        net_worth: 62.7
    },
    {
        name: 'Bernard Arnault',
        net_worth: 76
    },
    {
        name: 'Bill Gates',
        net_worth: 96.5
    },
    {
        name: 'Carlos Sim Helu',
        net_worth: 64
    },
    {
        name: 'Jeff Bezos',
        net_worth: 131
    },
    {
        name: 'Larry Ellison',
        net_worth: 58
    },
    {
        name: 'Larry Page',
        net_worth: 50.8
    },
    {
        name: 'Mark Zuckerberg',
        net_worth: 62.3
    },
    {
        name: 'Michael Bloomberg',
        net_worth: 55.5
    },
    {
        name: 'Warren Buffet',
        net_worth: 82.5
    }
];

const Main = () => {
    return (
    //BrowserRouter is the router implementation for HTML5 browsers
    //Link enables Routes on an anchor tag
    //Switch returns only the first matching route rather than all
    //Route is the conditionally shown component //based on matching a path to a URL
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<LctMsgs />} />
                <Route path="/table" element={<Table data={tableData} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Main;
