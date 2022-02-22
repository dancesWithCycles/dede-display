import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

//import 'bootstrap';
// or get all of the named exports for further usage
//eslint-disable-next-line
import * as bootstrap from 'bootstrap';

//eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';

//eslint-disable-next-line
import $ from 'jquery';

//eslint-disable-next-line
import Popper from 'popper.js';

ReactDOM.render(<Main />, document.getElementById('root'));
