import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import {App} from '@/app'
import {CustomersList} from '@/components/customers-list'

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app'),
)
