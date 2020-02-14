import {combineReducers} from 'redux'
import {customersReducers} from '@/store/customers/customers.reducers'


const rootReducer = combineReducers({
  customers: customersReducers
})

export default rootReducer
