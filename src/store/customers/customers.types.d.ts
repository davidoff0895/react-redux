export const GET_CUSTOMERS = 'GET_CUSTOMERS'

interface IGetCustomersAction {
  type: typeof GET_CUSTOMERS
  customers: ICustomer[]
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
