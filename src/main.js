import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import IvuLocs from './components/ivu-locs';
import Vehicles from './pages/vehicles';

const Main = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/ivu-locs">IvuLocs</Link>
                </li>
                <li>
                    <Link to="/vehicles">Vehicles</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/ivu-locs">
                    <IvuLocs />
                </Route>
                <Route exact path="/vehicles">
                    <Vehicles />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
export default Main;
