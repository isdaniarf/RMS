import * as types from '../actions/actionTypes'

const reduceDependant = (state = {}, action) => {
    switch (action.type) {
        case types.SHOW_PERSON_DETAIL:
            return { ...state, ...action.employee };
        case types.CHANGE_GRADE:
            return { ...state, grade: action.grade };
        case types.UPDATE_EMPLOYEE_UI:
            return action.employee;
        default:
            return state
    }
}

export default reduceDependant