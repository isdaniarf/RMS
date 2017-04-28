import * as types from '../actions/actionTypes'

const defaultState = {
    selected: null,
    initial: [],
    filtered: []
}

const reduceEmployees = (state = defaultState, action) => {
    switch (action.type) {
        case types.loadEmployees.success:
            return { ...state,
                initial: action.employees,
                filtered: action.employees
            }
        case types.FILTER_EMPLOYEES:
            return { ...state,
                filtered: state.initial.filter(a => (a.firstName + ' ' + a.lastName).toLowerCase().includes(action.filterKey))
            }
        case types.searchEmployees.success:
            return { ...state, 
                filtered: [...action.filteredEmployees]
            }
        case types.SET_SELECTED_EMPLOYEE:
            return { ...state,
                selected: action.index
            }
        default:
            return state
    }
}

export default reduceEmployees