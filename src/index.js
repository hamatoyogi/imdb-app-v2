import React from 'react';
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { dataStore } from './stores/data-store';
import routes from './Routes'

ReactDOM.render((
  <Router history={ hashHistory } routes={ routes(dataStore) }>
  </Router>
), document.querySelector("#root"));
