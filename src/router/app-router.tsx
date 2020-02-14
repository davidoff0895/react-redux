import * as React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import RouterView from '@/router/router-view'


export default function AppRouter() {
  return (
    <Router>
      <RouterView/>
    </Router>
  )
}
