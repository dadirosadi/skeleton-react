import React, {Suspense} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
// import {useSelector} from 'react-redux';

import {
    Home,
    About,
    NotFound
} from '../pages';

const routes =[
    {
        path: '/',
        component: Home,
        exact: true,
        noLogin: true
    },
    {
        path: '/about',
        component: About,
        exact: true,
        // loggedIn: true
        noLogin: true
    },
    {
      path: '/not-found',
      component: NotFound,
      exact: true,
      noLogin: true
  }
] 

const withAuth = BaseComponent => {
    const withAuth = props => {
        // const authState = useSelector(state => state.auth)

        return <BaseComponent {...props}  />
     }
     return withAuth
}

const renderRoute = () => {
    return routes.map(
      ({ path, component: Component, exact, noLogin, loggedIn }) => {
        if (noLogin) {
          return (
            <Route
              exact={exact}
              key={path}
              path={path}
              component={withAuth(props =>
                props.token ? (
                  <Redirect to={{ pathname: '/' }} />
                ) : (
                    <Component {...props} />
                  )
              )}
            />
          )
        }
  
        if (loggedIn) {
          return (
            <Route
              exact={exact}
              key={path}
              path={path}
              component={withAuth(props =>
                props.token ? (
                  <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                  )
              )}
            />
          )
        }
  
        return (
          <Route exact={exact} key={path} path={path} component={Component} />
        )
      }
    )
  }
  
  export default function Routes() {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          {renderRoute()}
          <Redirect to='/not-found' />
        </Switch>
      </Suspense>
    )
  }