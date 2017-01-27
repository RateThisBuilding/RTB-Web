import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Index from './containers/Index'
import CardList from './containers/CardList'


export default (
  <Route path="/" component={App}>
    <Route component={Dashboard}>
      <IndexRoute component={Index} />
      <Route path="cards" component={CardList} />
      <Route path="buildings" />
    </Route>

    {/* <Route path="*" component={NoMatch}/> */}
  </Route>
)
