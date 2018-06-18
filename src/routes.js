import React from 'react'
import {Route, IndexRedirect} from 'react-router'
//import AuthService from 'utils/AuthService'
import Form from './Form'
import Form_regis from './Form_regis'
import usuario from './usuario'
import mesa from './mesa'
import reserva from './reserva'
import recuperar from './recuperar'

//const auth = new AuthService()

/*const requireAuth = (nextState, replace) => {
  if (!auth.isAuthenticated()) {
    replace({ pathname: '/Form' })
  }
}

const requireAdmin = (nextState, replace) => {
  if (!auth.isAuthenticated() || !auth.isAdmin()) {
    replace({ pathname: '/Form' })
  }
}*/

export const makeMainRoutes = () => {
  return (
  //  <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/Form" />
      <Route path="Form" component={Form} />
      <Route path="Form_regis" component={Form_regis} onEnter={requireAdmin} />
      <Route path="usuario" component={usuario} onEnter={requireAuth} />
      <Route path="mesa" component={mesa} onEnter={requireAuth} />
      <Route path="reserva" component={reserva} onEnter={requireAuth} />
      <Route path="recuperar" component={recuperar} onEnter={requireAuth} />
    </Route>
  )
}

export default makeMainRoutes
