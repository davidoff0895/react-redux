import {GET_CUSTOMERS, IAppActonTypes, ICustomer} from '@/store/customers/customers.types'

const getCustomers = (customers: ICustomer[]): IAppActonTypes => {
  return {
    type: GET_CUSTOMERS,
    customers
  }
}

export {
  getCustomers
}
