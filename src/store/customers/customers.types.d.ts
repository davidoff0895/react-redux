export const GET_CUSTOMERS_INITIAL = 'GET_CUSTOMERS_INITIAL'
export const GET_CUSTOMERS_SUCCEED = 'GET_CUSTOMERS_SUCCEED'
export const GET_CUSTOMERS_FAILED = 'GET_CUSTOMERS_FAILED'

interface IGetCustomersAction {
  type: string
  customers: ICustomer[],
  error: string
}
type IAppActonTypes = IGetCustomersAction

interface ICustomer {
  id: string
  firstName?: string
  lastName?: string
  imgUrl?: string
  position?: string
}
interface IAppState {
  customersList: ICustomer[]
  customersPending: boolean
  customersError?: string
}
interface IMapState {
  customers: IAppState
}
interface ICustomersApi {
  api: {
    getCustomers(): Promise<{data: ICustomer[]}>
  }
}

export {
  ICustomer,
  IAppState,
  IAppActonTypes,
  IMapState,
  ICustomersApi
}
