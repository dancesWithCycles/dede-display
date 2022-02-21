import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import IvuLocs from './components/ivu-locs';
import Vehicles from './pages/vehicles';

const Main = () => {
    return (
    //BrowserRouter is the router implementation for HTML5 browsers
    //Link enables Routes on an anchor tag
    //Switch returns only the first matching route rather than all
    //Route is the conditionally shown component //based on matching a path to a URL
        <BrowserRouter>
            <nav
                className="navbar navbar-expand-sm navbar-dark"
                styles={{ backgroundColor: '#4b0082' }}
            >
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
            SIB
                    </a>

                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <ul>
                                <li>
                                    <Link to="/about" className="nav-item nav-link active">
                    About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="nav-item nav-link active">
                    Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ivu-locs" className="nav-item nav-link active">
                    IvuLocs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/vehicles" className="nav-item nav-link active">
                    Vehicles
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

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
