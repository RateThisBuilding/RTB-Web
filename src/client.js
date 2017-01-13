import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import TestComp from './components/TestComp'

const preloadedState = window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

render(
  <Provider store={store}>
    <TestComp />
  </Provider>,
  document.getElementById('root')
)
