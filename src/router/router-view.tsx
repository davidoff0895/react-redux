import * as React from 'react'
import {
  Route,
  RouteProps,
  Switch
} from 'react-router-dom'

import Customers from '@/containers/customers/customers'

const routes: RouteProps[] = [
  {
    path: '/',
    component: Customers,
  }
]
const routerView = routes.map((route, index) =>
  <Route path={route.path} component={route.component} key={index}/>
)

export default function RouterView() {
  return (
    <Switch>
      {routerView}
    </Switch>
  )
}
