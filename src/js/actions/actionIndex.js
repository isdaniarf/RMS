export const SHOW_PERSON_DETAIL = 'SHOW_PERSON_DETAIL'
export const LOAD_CONTACTS = 'LOAD_CONTACTS'
export const CHANGE_GRADE = 'CHANGE_GRADE'
export const FILTER_EMPLOYEES = 'FILTER_EMPLOYEES'
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE'
export const SEARCH_EMPLOYEES = 'SEARCH_EMPLOYEES'
export const SAVE_EMPLOYEE = 'SEARCH_EMPLOYEES'
export const UPDATE_EMPLOYEE_UI = 'UPDATE_EMPLOYEE_UI'
export const TOGGLE_SAVE_SNACKBAR = 'TOGGLE_SAVE_SNACKBAR'
export const CHANGE_TAB = 'CHANGE_TAB'

export const showEmployeeDetail = (employee) => {
  return {
    type: SHOW_PERSON_DETAIL,
    employee
  }
}

export const changeSelectField = (fieldType, value) => {
  return {
    type: CHANGE_GRADE,
    fieldType,
    value
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
    type: SAVE_EMPLOYEE,
    employee
  }
}

export const updateEmployee = (employee) => {
  return {
    type: UPDATE_EMPLOYEE_UI,
    employee
  }
}

export const toggleSaveSnackbar = (isOpen) => {
  return {
    type: TOGGLE_SAVE_SNACKBAR,
    isOpen
  }
}

export const changeTab = (selectedTab) => {
  return {
    type: CHANGE_TAB,
    selectedTab
  }
}

export const boundShowEmployeeDetail = (employee) => (dispatch) => {
  dispatch(showEmployeeDetail(employee))
}

export const boundChangeSelectField = (fieldType, value) => (dispatch) => {
  dispatch(changeSelectField(fieldType, value))
}

export const boundLoadContacts = () => (dispatch) => {
  const requestParam = {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*' },
    mode: 'cors',
    cache: 'default'
  };
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
  fetch('http://localhost:8080/employee/search?name=' + searchKey, requestParam).then(x => {
    return x.json();
  }).then(emps => {
    dispatch(searchEmployees(emps));
  });
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
  fetch('http://localhost:8080/employee/add', requestParam).then(x => {
    return x.text();
  }).then(response => {
    dispatch(toggleSaveSnackbar());
    fetch('http://localhost:8080/employee/all').then(x => {
      return x.json();
    }).then(emps => {
      dispatch(loadContacts(emps));
    });
    // dispatch(loadContacts());
    // return response;
  });
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