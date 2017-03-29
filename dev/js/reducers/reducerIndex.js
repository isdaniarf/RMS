import { combineReducers } from 'redux'
import reducePerson from './reducePerson'
import reduceEmployees from './reduceEmployees'
import reduceSaveSnackbar from './reduceSaveSnackbar'
import reduceDependant from './reduceDependant'

const rmsApp = combineReducers({
  reducePerson,
  reduceEmployees,
  reduceSaveSnackbar,
  reduceDependant
})

export default rmsApp