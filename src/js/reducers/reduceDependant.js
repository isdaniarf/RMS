import * as ActionIndex from '../actions/actionIndex'

const reduceDependant = (state = {}, action) => {
    switch (action.type) {
        case ActionIndex.SHOW_PERSON_DETAIL:
            return Object.assign({}, state, action.employee);
        case ActionIndex.CHANGE_GRADE:
            return Object.assign({}, state, {
                grade: action.grade
            });
        case ActionIndex.UPDATE_EMPLOYEE_UI:
            return Object.assign({}, action.employee);
        default:
            return state
    }
}

export default reduceDependant