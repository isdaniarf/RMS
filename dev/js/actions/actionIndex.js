export const SHOW_PERSON_DETAIL = 'SHOW_PERSON_DETAIL'
export const LOAD_CONTACTS = 'LOAD_CONTACTS'
export const CHANGE_GRADE = 'CHANGE_GRADE'
export const FILTER_EMPLOYEES = 'FILTER_EMPLOYEES'
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE'

var employees = require('../data/persons.json');

export const showPersonDetail = (person) => {
  return {
    type: SHOW_PERSON_DETAIL,
    person
  }
}

export const changeGrade = (grade) => {
  return {
    type: CHANGE_GRADE,
    grade
  }
}

export const loadContacts = (employees) => {
  return {
    type: LOAD_CONTACTS,
    employees
  }
}

export const filterEmployees = (filterKey) => {
  return {
    type: FILTER_EMPLOYEES,
    filterKey
  }
}

export const setSelectedEmployee = (person) => {
  return {
    type: SET_SELECTED_EMPLOYEE,
    person
  }
}

export const boundShowPersonDetail = (person) => (dispatch) => {
  dispatch(showPersonDetail(person))
}

export const boundChangeGrade = (grade) => (dispatch) => {
  dispatch(changeGrade(grade))
}

export const boundLoadContacts = (employees) => (dispatch) => {
  dispatch(loadContacts(employees))
}

export const boundFilterEmployees = (filterKey) => (dispatch) => {
  dispatch(filterEmployees(filterKey))
}

export const boundSetSelectedEmployee = (person) => (dispatch) => {
  dispatch(setSelectedEmployee(person))
}