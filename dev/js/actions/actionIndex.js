export const SHOW_PERSON_DETAIL = 'SHOW_PERSON_DETAIL'
export const LOAD_CONTACTS = 'LOAD_CONTACTS'

var employees = require('../data/persons.json');

export const showPersonDetail = (person) => {
  return {
    type: SHOW_PERSON_DETAIL,
    person
  }
}

export const boundShowPersonDetail = (person) => (dispatch) => {
    dispatch(showPersonDetail(person))
}

export const loadContacts = (employees) => {
  return {
    type: LOAD_CONTACTS,
    employees
  }
}

export const boundLoadContacts = (employees) => (dispatch) => {
    dispatch(loadContacts(employees))
}