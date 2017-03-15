import { combineReducers } from 'redux'
import reducePerson from './reducePerson'
import reduceEmployees from './reduceEmployees'

const rmsApp = combineReducers({
  reducePerson,
  reduceEmployees
})

export default rmsApp