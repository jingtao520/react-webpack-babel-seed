import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import './scss/app.scss';

import React from 'react';
import ReactDOM from "react-dom";
import routes from './config/routes';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={ hashHistory }>{ routes }</Router>,
  document.getElementById('app')
);
