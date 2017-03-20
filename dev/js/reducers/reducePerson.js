const initialState = {
    id: 1
}

const reducePerson = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_PERSON_DETAIL':
            return action.person
        case 'CHANGE_GRADE':
            return Object.assign({}, state, {
                grade: action.grade
            })
        default:
            return state
    }
}

export default reducePerson