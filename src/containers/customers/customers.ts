import { connect, ConnectedProps } from 'react-redux'
import { CustomersList } from '@/components/customers/customers-list'
import { IMapState } from '@/store/customers/customers.types'
import http from '@/api/createHttp'
import createCustomerApi from '@/api/customers/customers'

const api = createCustomerApi({http})

const mapState = (state: IMapState) => ({
  customers: state.customers.customersList
})

const mapDispatch = {
  getCustomers: () => ({type: 'GET_CUSTOMERS', customers: [
      {
        id: '1',
        firstName: 'john',
        lastName: 'doe',
        imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        position: 'Programmer'
      }
    ]})
}

const connector = connect(
  mapState,
  mapDispatch
)

export default connector(CustomersList)
