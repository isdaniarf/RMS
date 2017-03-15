const initialState = {
    id: 1
}

const reducePerson = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_PERSON_DETAIL':
            return action.person

        default:
            return state
    }
}

export default reducePerson