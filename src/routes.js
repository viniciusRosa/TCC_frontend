import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import Login from './pages/login'
import Dashboard from './pages/dashboard'
import StudentProfile from './pages/studentProfile'
import StudentRegister from './pages/studentRegister'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />

      <Route path="/cadastrar_aluno" component={StudentRegister} />

      <Route path="/dash" component={Dashboard} />
      <Route path="/student_profile" component={StudentProfile} />
      <Route path="*" component={() => <h1>Page not found</h1>} />

    </Switch>
  </BrowserRouter>
);

export default Routes;

// export default function () {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path='/' exact component={Login} />
//         <Route path='/dashboard' component={Dashboard} />
//       </Switch>
//     </BrowserRouter>
//   )
// }
