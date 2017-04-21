import * as ActionIndex from '../actions/actionIndex'

const defaultState = {
    selected: null,
    initial: [],
    filtered: []
}

const reduceEmployees = (state = defaultState, action) => {
    switch (action.type) {
        case ActionIndex.loadEmployees.success:
            return { ...state,
                initial: action.employees,
                filtered: action.employees
            }
        case ActionIndex.FILTER_EMPLOYEES:
            return { ...state,
                filtered: state.initial.filter(a => (a.firstName + ' ' + a.lastName).toLowerCase().includes(action.filterKey))
            }
        case ActionIndex.SEARCH_EMPLOYEES:
            return { ...state, 
                filtered: [...action.filteredEmployees]
            }
        case ActionIndex.SET_SELECTED_EMPLOYEE:
            return { ...state,
                selected: action.index
            }
        default:
            return state
    }
}

export default reduceEmployees