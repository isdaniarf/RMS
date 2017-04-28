import { createAsyncAction } from '../util/util'

// Regular Actions
export const SHOW_PERSON_DETAIL = 'SHOW_PERSON_DETAIL'
export const CHANGE_GRADE = 'CHANGE_GRADE'
export const FILTER_EMPLOYEES = 'FILTER_EMPLOYEES'
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE'
export const UPDATE_EMPLOYEE_UI = 'UPDATE_EMPLOYEE_UI'
export const TOGGLE_SAVE_SNACKBAR = 'TOGGLE_SAVE_SNACKBAR'
export const CHANGE_TAB = 'CHANGE_TAB'
export const SHOW_ADD_MODAL = 'SHOW_ADD_MODAL'

// Async Actions
export const loadEmployees = createAsyncAction('LOAD_EMPLOYEES')
export const searchEmployees = createAsyncAction('SEARCH_EMPLOYEES')
export const saveEmployees = createAsyncAction('SAVE_EMPLOYEES')