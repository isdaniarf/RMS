const defaultState = {
    initial: [],
    filtered: []
}

const reduceEmployees = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_CONTACTS':
            return Object.assign({}, state, {
                initial: action.employees,
                filtered: action.employees
            })
        case 'FILTER_EMPLOYEES':
            // console.log(action.filterKey)
            // console.log(state.initial.filter((a) => a.name.includes(action.filterKey)))
            return Object.assign({}, state, {
                filtered: state.initial.filter(a => a.name.toLowerCase().includes(action.filterKey))
            })
        case 'SET_SELECTED_EMPLOYEE':
            // let newFiltered = JSON.parse(JSON.stringify(state.filtered));
            let newFiltered = [...state.filtered]
            newFiltered.forEach(a => a.selected = a.id == action.person.id ? true : a.selected = false)
            console.log(newFiltered)
            console.log(state.filtered)
            return Object.assign({}, state, {
                filtered: newFiltered
            })
        default:
            return state
    }
}

export default reduceEmployees