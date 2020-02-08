import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {CustomersList} from '@/components/customers-list'

ReactDOM.render(
  <CustomersList customers={[{
    id: "1",
    firstName: "john",
    lastName: "doe1",
    imgUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    position: "Programmer"
  }]}/>,
  document.getElementById("app")
);
