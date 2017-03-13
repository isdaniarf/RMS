import { combineReducers } from 'redux'
import reducePersons from './reducers/reducePersons'

const rmsApp = combineReducers({
  reducePersons
})

export default rmsApp