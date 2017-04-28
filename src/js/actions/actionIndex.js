import fetch from 'isomorphic-fetch'
import * as types from './actionTypes'

export const showEmployeeDetail = (employee) => ({
  type: types.SHOW_PERSON_DETAIL,
  employee
})

export const changeSelectField = (fieldType, value) => ({
  type: types.CHANGE_GRADE,
  fieldType,
  value
})

export const loadContacts = () => ({
  type: types.loadEmployees.start,
})

export const loadContactsSuccess = (employees) => ({
  type: types.loadEmployees.success,
  employees
});

export const loadContactsFail = (ex) => ({
  type: types.loadEmployees.fail, 
  ex
});

export const filterEmployees = (filterKey) => ({
  type: types.FILTER_EMPLOYEES,
  filterKey
})

export const setSelectedEmployee = (index) => ({
  type: types.SET_SELECTED_EMPLOYEE,
  index
})

export const searchEmployeesStart = () => ({
  type: types.searchEmployees.start
})

export const searchEmployeesSuccess = (filteredEmployees) => ({
  type: types.searchEmployees.success,
  filteredEmployees
})

export const searchEmployeesFail = (ex) => ({
  type: types.searchEmployees.fail
})

export const saveEmployee = (employee) => ({
  type: types.saveEmployees,
  employee
})

export const saveEmployeeFail = (ex) => ({
  type: types.saveEmployees.fail
})

export const updateEmployee = (employee) => ({
  type: types.UPDATE_EMPLOYEE_UI,
  employee
})

export const toggleSaveSnackbar = (isOpen) => ({
  type: types.TOGGLE_SAVE_SNACKBAR,
  isOpen
})

export const changeTab = (selectedTab) => ({
  type: types.CHANGE_TAB,
  selectedTab
})

export const showAddModal = (isModalShown) => ({
  type: types.SHOW_ADD_MODAL,
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
  dispatch(searchEmployeesStart());
  return fetch('http://localhost:8080/employee/search?name=' + searchKey)
    .then(x => x.json())
    .then(emps => dispatch(searchEmployeesSuccess(emps)))
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

  return fetch('http://localhost:8080/employee/add', requestParam)
    .then(x => x.text())
    .then(response => {
      dispatch(toggleSaveSnackbar(true));
      dispatch(loadContacts());
      return fetch('http://localhost:8080/employee/all')
        .then(x => x.json())
        .then(emps => {
          dispatch(loadContactsSuccess(emps));
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