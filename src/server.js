import path from 'path'
import express from 'express'
import React, { DOM } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { match, RoutingContext } from 'react-router'
import HBS from 'express-handlebars'
import fs from 'fs'
import passport from 'passport'

import ReactDOMServer, { renderToString } from 'react-dom/server'
import configureStore from './store/configureStore'
import routes from './routes'
import routerManager from './server/routerManager'
import sequelize from './db/'
// import counterApp from './reducers'
// import App from './containers/App'

// class AugmentedRoutingContext extends RoutingContext {
//   createElement(component, props){
//     const context = this.props.context;
//     // return component == null ? null : this.props.createElement(component, {...props, ...{context}});
//   }
// }

const app = express()
const port = process.env.PORT || 3000

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'assets')))
app.set('views', path.resolve(__dirname, 'templates'))
app.engine('hbs', HBS({
  extname: 'hbs',
  defaultLayout: 'main.hbs',
  layoutsDir: path.resolve(__dirname, 'templates', 'layouts'),
  partialsDir: path.resolve(__dirname, 'templates', 'partials')
}))
app.set('view engine', 'hbs')

app.use('/api', routerManager.constructAPIRouter())
app.use('/auth', routerManager.constructAuthRouter())
app.use('/', routerManager.constructPageRouter())




// API routes
// ** TO BE ADDED **

app.listen(port, (err)=> {
    console.log(`Server has started at port ${port}`);
})
