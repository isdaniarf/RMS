const reduceEmployees = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACTS':
            return action.employees

        default:
            return state
    }
}

export default reduceEmployees