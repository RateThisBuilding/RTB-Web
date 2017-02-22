import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Index from './containers/Index'
import CardList from './containers/CardList'
import Login from './containers/Login'


export default (
  <Route path="/" component={App}>
    <Route component={Dashboard}>
      <IndexRoute component={Index} />
      <Route path="cards" component={CardList} />
      <Route path="login" component={Login} />
      <Route path="buildings" />
    </Route>

    {/* <Route path="*" component={NoMatch}/> */}
  </Route>
)
