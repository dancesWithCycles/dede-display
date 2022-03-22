import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*some stylesheet is required to use react-bootstrip components*/
import 'bootstrap/dist/css/bootstrap.min.css';

import LctMsgs from './pages/lct-msgs';
import LctMsg from './pages/lct-msg';
import LctMsgNext from './pages/lct-msg-next';
import TableWithApi from './pages/table-with-api';
import Contact from './pages/contact';
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
                <Route path="/" element={<LctMsgs />} />
                <Route path="/lct-msg" element={<LctMsg />} />
                <Route path="/lct-msg-next" element={<LctMsgNext />} />
                <Route path="/table-with-api" element={<TableWithApi />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Main;
