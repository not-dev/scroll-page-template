import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { Faq1, Faq2 } from '../pages'

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Faq2} />
        <Route path='/1' component={Faq1} />
        <Route path='/2' component={Faq2} />
        <Route component={Faq2} />
      </Switch>
    </HashRouter>
  )
}

export { Router }
