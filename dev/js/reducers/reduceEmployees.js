const reduceEmployees = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACTS':
            return action.employees
        case 'FILTER_EMPLOYEES':
            console.log(action.filterKey)
            console.log(state.filter((a) => a.name.includes(action.filterKey)))
            return state.filter((a) => a.name.includes(action.filterKey))
        default:
            return state
    }
}

export default reduceEmployees