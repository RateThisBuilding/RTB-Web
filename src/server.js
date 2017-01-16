import path from 'path'
import express from 'express'
import React, { DOM } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { match } from 'react-router'
import HBS from 'express-handlebars'

import ReactDOMServer, { renderToString } from 'react-dom/server'
import configureStore from './store/configureStore'
import routes from './routes'
import TestComp from './components/TestComp'
// import counterApp from './reducers'
// import App from './containers/App'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'static')))
app.set('views', path.resolve(__dirname, 'templates'))
app.engine('hbs', HBS({
      extname:'hbs',
      defaultLayout:'main.hbs',
      layoutsDir: path.resolve(__dirname, 'templates', 'layouts')
  }));
app.set('view engine', 'hbs');

// page routes
const router = express.Router();
router.get('*', (req,res) => {
  match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
    if(!err){
      res.render('index')
    }
  })
})
app.use(router)

// API routes
// ** TO BE ADDED **

// app.use('/publicgachi/',handleRender)
//
// function handleRender(req, res) {
//   // Create a new Redux store instance
//   const store = configureStore()
//
//   // Render the component to a string
//   const html = renderToString(
//     <Provider store={store}>
//       <TestComp />
//     </Provider>
//   )
//
//   // Grab the initial state from our Redux store
//   const preloadedState = store.getState()
//
//   // Send the rendered page back to the client
//   res.send(renderFullPage(html, preloadedState))
// }
//
// app.get('/', (req, res) => {
//   let html = ReactDOMServer.renderToStaticMarkup(DOM.body(null,
//     DOM.div({id: 'content', dangerouslySetInnerHTML: {__html:
//         ReactDOMServer.renderToString(TestComp())
//       }}),
//     // DOM.script({dangerouslySetInnerHTML: {__html:
//     //     'var APP_PROPS = ' + safeStringify(props) + ';'
//     //   }}),
//     DOM.script({src: '/bundle.js'})
//   ))
//
//   res.send(200, html)
//   res.end()
//
// })
//
// function renderFullPage(html, preloadedState) {
//   return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Redux Universal Example</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <script>
//           // WARNING: See the following for Security isues with this approach:
//           // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
//           window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
//         </script>
//         <script src="/bundle.js"></script>
//       </body>
//     </html>
//     `
// }

app.listen(port)
