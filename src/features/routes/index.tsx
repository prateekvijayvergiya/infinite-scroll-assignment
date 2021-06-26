import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../components/dashboard'
import Home from '../components/Home'
import Login from '../components/login'
import NotFound from '../components/notFound'
import ProtectedRoute from './protectedRoute'
import HomeProtectedRoute from './homeProtectedRoute'

const Routes: React.FC = () => {
  return (
    <Switch>
      <ProtectedRoute exact={true} path="/" component={Dashboard} />
      <ProtectedRoute exact={true} path="/login" component={Login} />
      {/* <Route exact path="/home" component={Home} /> */}
      <HomeProtectedRoute exact={true} path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
