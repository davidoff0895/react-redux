import {IAppState, IAppActonTypes, GET_CUSTOMERS, ICustomersApi} from './customers.types'

const initialState: IAppState = {
  customersList: [{
    id: '1',
    firstName: 'john',
    lastName: 'doe',
    imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    position: 'Programmer'
  }]
}

export function customersReducers(
  state = initialState,
  action: IAppActonTypes
): IAppState {
  switch (action.type) {
    case 'GET_CUSTOMERS':
      console.log('GET_CUSTOMERS')
    default:
      return state
  }
}
