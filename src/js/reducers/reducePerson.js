import * as ActionIndex from '../actions/actionIndex'

const reducePerson = (state = {}, action) => {
    switch (action.type) {
        case ActionIndex.SHOW_PERSON_DETAIL:
            // console.log(Object.assign({}, state, action.employee));
            return Object.assign({}, state, action.employee);
        case ActionIndex.CHANGE_GRADE:
            let newValue = Object.assign({}, state);
            newValue[action.fieldType] = action.value;
            return newValue;
        case ActionIndex.UPDATE_EMPLOYEE_UI:
            return Object.assign({}, action.employee);
        default:
            return state
    }
}

export default reducePerson