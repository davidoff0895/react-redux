import * as React from 'react'
import {
  Route,
} from 'react-router-dom'
import {CustomersList} from '@/components/customers-list'

export function App() {
  return (
    <Route path='/customers'>
        <CustomersList customers={[{
            id: '1',
            firstName: 'john',
            lastName: 'doe1',
            imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
            position: 'Programmer'
        }]}/>
    </Route>
  )
}
