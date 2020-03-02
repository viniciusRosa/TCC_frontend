import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login'

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}