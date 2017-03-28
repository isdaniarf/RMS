export const SHOW_PERSON_DETAIL = 'SHOW_PERSON_DETAIL'
export const LOAD_CONTACTS = 'LOAD_CONTACTS'
export const CHANGE_GRADE = 'CHANGE_GRADE'
export const FILTER_EMPLOYEES = 'FILTER_EMPLOYEES'
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE'
export const SEARCH_EMPLOYEES = 'SEARCH_EMPLOYEES'
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'

var employees = require('../data/persons.json');

export const showEmployeeDetail = (employee) => {
  return {
    type: SHOW_PERSON_DETAIL,
    employee
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

export const setSelectedEmployee = (employee) => {
  return {
    type: SET_SELECTED_EMPLOYEE,
    employee
  }
}

export const searchEmployees = (filteredEmployees) => {
  return {
    type: SEARCH_EMPLOYEES,
    filteredEmployees
  }
}

export const saveEmployee = (employee) => {
  return {
    type: SEARCH_EMPLOYEES,
    employee
  }
}

export const updateEmployee = (employee) => {
  return {
    type: UPDATE_EMPLOYEE,
    employee
  }
}

export const boundShowEmployeeDetail = (employee) => (dispatch) => {
  dispatch(showEmployeeDetail(employee))
}

export const boundChangeGrade = (grade) => (dispatch) => {
  dispatch(changeGrade(grade))
}

export const boundLoadContacts = () => (dispatch) => {
  const myHeaders = new Headers();
  const requestParam = {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*' },
    mode: 'cors',
    cache: 'default'
  };
  const employees = require('../data/persons.json');
  let emps = [];
  fetch('http://localhost:8080/employee/all', requestParam).then(x => {
    return x.json();
  }).then(emps => {
    dispatch(loadContacts(emps))
  });
}

export const boundFilterEmployees = (filterKey) => (dispatch) => {
  dispatch(filterEmployees(filterKey))
}

export const boundSetSelectedEmployee = (employee) => (dispatch) => {
  dispatch(setSelectedEmployee(employee))
}

export const boundSearchEmployees = (searchKey) => (dispatch) => {
  const requestParam = {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*' },
    mode: 'cors',
    cache: 'default'
  };
  fetch('http://localhost:8080/employee/search?name='+searchKey, requestParam).then(x => {
    return x.json();
  }).then(emps => {
    dispatch(searchEmployees(emps));
  });
}

export const boundUpdateEmployee = (employee) => (dispatch) => {
  dispatch(updateEmployee(employee))
}