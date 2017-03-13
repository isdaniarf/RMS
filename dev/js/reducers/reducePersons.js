const initialState = {
    id: 1
}

const reducePersons = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_PERSON_DETAIL':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                selectedID: action.id
            })

        default:
            return state
    }
}

export default reducePersons