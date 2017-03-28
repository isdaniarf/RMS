import * as ActionIndex from '../actions/actionIndex'

const initialState = {
    id: 1
}

const reducePerson = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_PERSON_DETAIL':
            return Object.assign({}, state, action.employee);
        case 'CHANGE_GRADE':
            return Object.assign({}, state, {
                grade: action.grade
            });
        case ActionIndex.UPDATE_EMPLOYEE:
            return Object.assign({}, action.employee);
        default:
            return state
    }
}

export default reducePerson