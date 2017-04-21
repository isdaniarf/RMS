import { combineReducers } from 'redux'
import reducePerson from './reducePerson'
import reduceEmployees from './reduceEmployees'
import reduceSaveSnackbar from './reduceSaveSnackbar'
import reduceDependant from './reduceDependant'
import reduceAddModal from './reduceAddModal'

const reducerIndex = combineReducers({
  reducePerson,
  reduceEmployees,
  reduceSaveSnackbar,
  reduceDependant,
  reduceAddModal
})

export default reducerIndex