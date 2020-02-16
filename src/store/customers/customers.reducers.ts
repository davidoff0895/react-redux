import {
  IAppState,
  IAppActonTypes,
  GET_CUSTOMERS_INITIAL,
  GET_CUSTOMERS_SUCCEED,
  GET_CUSTOMERS_FAILED,
} from './customers.types'

const initialState: IAppState = {
  customersList: [],
  customersPending: false,
  customersError: null
}

export function customersReducers(
  state = initialState,
  action: IAppActonTypes
): IAppState {
  switch (action.type) {
    case 'GET_CUSTOMERS_INITIAL':
      return {
        customersList: [],
        customersPending: true
      }
    case 'GET_CUSTOMERS_SUCCEED':
      return {
        customersList: action.customers,
        customersPending: false
      }
    case 'GET_CUSTOMERS_FAILED':
      return {
        customersList: state.customersList,
        customersPending: false,
        customersError: action.error
      }
    default:
      return state
  }
}
