import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import CardList from './containers/CardList'


export default (
  <Route path="/" component={App}>
    <Route component={Dashboard}>
      <Route path="cards" component={CardList} />
      <Route path="buildings" />
    </Route>

    {/* <Route path="*" component={NoMatch}/> */}
  </Route>
)
