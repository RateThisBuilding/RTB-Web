import path from 'path'
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import configureStore from './store/configureStore'
import TestComp from './components/TestComp'
// import counterApp from './reducers'
// import App from './containers/App'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'static')))
app.use(handleRender)

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = configureStore()

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <TestComp />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for Security isues with this approach:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
