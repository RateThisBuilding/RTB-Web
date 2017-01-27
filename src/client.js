require('./stylesheets/styles.scss')

import React from 'react'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import routes from './routes.jsx'

const preloadedState = window.__PRELOADED_STATE__

const store = configureStore(preloadedState)
render(
  (
    <Router history={browserHistory}>
      {routes}
    </Router>
  ),document.querySelectorAll('[data-ui-role="content"]')[0]
)
