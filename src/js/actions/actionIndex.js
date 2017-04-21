import fetch from 'isomorphic-fetch'
import { createAsyncAction } from '../util/util'

export const SHOW_PERSON_DETAIL = 'SHOW_PERSON_DETAIL'
export const loadEmployees = createAsyncAction('LOAD_EMPLOYEE')
export const CHANGE_GRADE = 'CHANGE_GRADE'
export const FILTER_EMPLOYEES = 'FILTER_EMPLOYEES'
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE'
export const SEARCH_EMPLOYEES = 'SEARCH_EMPLOYEES'
export const SEARCH_EMPLOYEES_FAIL = 'SEARCH_EMPLOYEES_FAIL'
export const SAVE_EMPLOYEE = 'SAVE_EMPLOYEE'
export const SAVE_EMPLOYEE_SUCCESS = 'SAVE_EMPLOYEE_SUCCESS'
export const SAVE_EMPLOYEE_FAIL = 'SAVE_EMPLOYEE_FAIL'
export const UPDATE_EMPLOYEE_UI = 'UPDATE_EMPLOYEE_UI'
export const TOGGLE_SAVE_SNACKBAR = 'TOGGLE_SAVE_SNACKBAR'
export const CHANGE_TAB = 'CHANGE_TAB'
export const SHOW_ADD_MODAL = 'SHOW_ADD_MODAL'

export const showEmployeeDetail = (employee) => ({
  type: SHOW_PERSON_DETAIL,
  employee
})

export const changeSelectField = (fieldType, value) => ({
  type: CHANGE_GRADE,
  fieldType,
  value
})

export const loadContacts = () => ({
  type: loadEmployees.start,
})

export const loadContactsSuccess = (employees) => ({
  type: loadEmployees.success,
  employees
});

export const loadContactsFail = (ex) => ({
  type: loadEmployees.fail, 
  ex
});

export const filterEmployees = (filterKey) => ({
  type: FILTER_EMPLOYEES,
  filterKey
})

export const setSelectedEmployee = (index) => ({
  type: SET_SELECTED_EMPLOYEE,
  index
})

export const searchEmployees = (filteredEmployees) => ({
  type: SEARCH_EMPLOYEES,
  filteredEmployees
})

export const searchEmployeesFail = (ex) => ({
  type: SEARCH_EMPLOYEES_FAIL
})

export const saveEmployee = (employee) => ({
  type: SAVE_EMPLOYEE,
  employee
})

export const saveEmployeeFail = (ex) => ({
  type: SAVE_EMPLOYEE_FAIL
})

export const updateEmployee = (employee) => ({
  type: UPDATE_EMPLOYEE_UI,
  employee
})

export const toggleSaveSnackbar = (isOpen) => ({
  type: TOGGLE_SAVE_SNACKBAR,
  isOpen
})

export const changeTab = (selectedTab) => ({
  type: CHANGE_TAB,
  selectedTab
})

export const showAddModal = (isModalShown) => ({
  type: SHOW_ADD_MODAL,
  isModalShown
})

export const boundShowEmployeeDetail = (employee) => (dispatch) => {
  dispatch(showEmployeeDetail(employee))
}

export const boundChangeSelectField = (fieldType, value) => (dispatch) => {
  dispatch(changeSelectField(fieldType, value))
}

export const boundLoadContacts = () => (dispatch) => {
  dispatch(loadContacts());
  return fetch('http://localhost:8080/employee/all')
    .then(x => x.json())
    .then(emps => dispatch(loadContactsSuccess(emps)))
    .catch(ex => dispatch(loadContactsFail(ex)))
}

export const boundFilterEmployees = (filterKey) => (dispatch) => {
  dispatch(filterEmployees(filterKey))
}

export const boundSetSelectedEmployee = (index) => (dispatch) => {
  dispatch(setSelectedEmployee(index))
}

export const boundSearchEmployees = (searchKey) => (dispatch, getState) => {
  // if(getIsFetching(getState))
  return fetch('http://localhost:8080/employee/search?name=' + searchKey)
    .then(x => x.json())
    .then(emps => dispatch(searchEmployees(emps)))
    .catch(ex => dispatch(searchEmployeesFail(ex)))
}

export const boundSaveEmployee = (employee) => (dispatch) => {
  const requestParam = {
    method: 'POST',
    body: JSON.stringify(employee),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  };

  // console.log(JSON.stringify(employee));
  return fetch('http://localhost:8080/employee/add', requestParam)
    .then(x => x.text())
    .then(response => {
      dispatch(toggleSaveSnackbar(true));
      return fetch('http://localhost:8080/employee/all')
        .then(x => x.json())
        .then(emps => {
          dispatch(loadContacts(emps));
        });
    }).catch(ex => dispatch(saveEmployeeFail(ex)));
}

export const boundUpdateEmployee = (employee) => (dispatch) => {
  dispatch(updateEmployee(employee));
}

export const boundToggleSaveSnackbar = (isOpen) => (dispatch) => {
  dispatch(toggleSaveSnackbar(isOpen));
}

export const boundChangeTab = (selectedTab) => (dispatch) => {
  dispatch(changeTab(selectedTab));
}

export const boundShowAddModal = (isModalShown) => (dispatch) => {
  dispatch(showAddModal(isModalShown));
}