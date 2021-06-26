import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useLocalStorage from './../../app/utils/localStorageUtils'

type HomeProtectedRoutesProps = {
  component: React.ComponentType
  path: string
  exact: boolean
}

const HomeProtectedRoute: React.FC<HomeProtectedRoutesProps> = ({
  component: Component,
  path,
}) => {
  // const {isUserLoggedIn} = useLocalStorage('isUserLoggedIn')
  const isUserLoggedIn = window.localStorage.getItem('isUserLoggedIn')
  return (
    <Route
      exact
      path={path}
      render={() =>
        isUserLoggedIn ? <Component /> : <Redirect to={'/login'} />
      }
    />
  )
}

export default HomeProtectedRoute
