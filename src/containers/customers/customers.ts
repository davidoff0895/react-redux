import {connect} from 'react-redux'
import CustomersList from '@/components/customers/customers-list'
import {IAppActonTypes, IMapState} from '@/store/customers/customers.types'
import http from '@/api/createHttp'
import createCustomerApi from '@/api/customers/customers'

const api = createCustomerApi({http})

const mapState = (state: IMapState) => ({
  customers: state.customers.customersList,
  pending: state.customers.customersPending,
  error: state.customers.customersError,
})
const getCustomersActon = ({type, customers, error}: IAppActonTypes) => {
  return {
    type, customers, error
  }
}
const getCustomers = () => {
  return async (dispatch: any) => {
    dispatch(getCustomersActon({
      type: 'GET_CUSTOMERS_INITIAL'
    }))
    try {
      const {data: customers} = await api.getCustomers()

      dispatch(getCustomersActon({
        type: 'GET_CUSTOMERS_SUCCEED',
        customers
      }))
    } catch (error) {
      dispatch(getCustomersActon({
        type: 'GET_CUSTOMERS_FAILED',
        error
      }))
    }
  }
}

const mapDispatch = {
  getCustomers
}

const connector = connect(
  mapState,
  mapDispatch
)

export default connector(CustomersList)
