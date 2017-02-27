import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

import passport from './authStrategy'
import routes from '../routes'

console.log(passport)

export default class routerManager {
  static constructPageRouter() {
    const router = express.Router()
    router.get('*', (req, res) => {
      match({ routes, location: req.originalUrl }, (err, redirectLocation, renderProps) => {
        if (!err) {
          fs.readFile(path.join(__dirname, '..', 'data.json'), 'utf-8', (fileReadErr, data) => {
            if (fileReadErr) throw fileReadErr
            // console.log(renderProps);

            const html = routerManager.pageRender(renderProps, data)
            // const html = renderToString()
            res.render('index', {
              content: html,
              context: data
            })
          })
        }
      })
    })
    return router
  }

  static constructAPIRouter() {
    const router = express.Router()
    router.get('/cardsData',(req, res) => {
      fs.readFile(path.join(__dirname, '..', 'data.json'), 'utf-8', (fileReadErr, data) => {
        if (!fileReadErr) {
          res.json(JSON.parse(data))
        } else {
          res.status(500).send()
        }
      })
    })
    return router
  }

  static constructAuthRouter() {
    const router = express.Router()
    router.get('/facebook', passport.authenticate('facebook'))
    router.get('/fbcallback', passport.authenticate('facebook', { failureRedirect: '/login', failureFlash: 'Facebook login failed.' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      })
        
    return router
  }

  static pageRender(renderProps, data){
    const html = renderToString(
      <RouterContext {...renderProps} createElement={(Component, props) => {
        return <Component {...props} {...JSON.parse(data)} />
      }} />
    )
    return html
  }

}
