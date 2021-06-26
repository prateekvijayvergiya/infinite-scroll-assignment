import React from 'react'
import { Route, Redirect } from 'react-router-dom'

type ProtectedRoutesProps = {
  component: React.ComponentType
  path: string
  exact: boolean
}

const ProtectedRoute: React.FC<ProtectedRoutesProps> = ({
  component: Component,
  path,
}) => {
  const isUserLoggedIn = window.localStorage.getItem('isUserLoggedIn')
  return (
    <Route
      exact
      path={path}
      render={() =>
        !isUserLoggedIn ? <Component /> : <Redirect to={'/home'} />
      }
    />
  )
}

export default ProtectedRoute
