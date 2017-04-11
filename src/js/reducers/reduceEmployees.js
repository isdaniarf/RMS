import * as ActionIndex from '../actions/actionIndex'

const defaultState = {
    selected: null,
    initial: [],
    filtered: []
}

const reduceEmployees = (state = defaultState, action) => {
    switch (action.type) {
        case ActionIndex.LOAD_EMPLOYEES:
            return Object.assign({}, state, {
                initial: action.employees,
                filtered: action.employees
            });
        case ActionIndex.FILTER_EMPLOYEES:
            // console.log(state)
            return Object.assign({}, state, {
                filtered: state.initial.filter(a => (a.firstName + ' ' + a.lastName).toLowerCase().includes(action.filterKey))
            });
        case ActionIndex.SEARCH_EMPLOYEES:
            // console.log(Object.assign({}, state, [...action.filteredEmployees]));
            return Object.assign({}, state, {
                filtered: [...action.filteredEmployees]
            });
        case ActionIndex.SET_SELECTED_EMPLOYEE:
            // let newFiltered = JSON.parse(JSON.stringify(state.filtered));
            return Object.assign({}, state, {
                selected: action.index
            })
        default:
            return state
    }
}

export default reduceEmployees