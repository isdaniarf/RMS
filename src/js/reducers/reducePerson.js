import * as types from '../actions/actionTypes'

const defaultState = {
        id: '',
        grade: '',
        city: '',
        mobileNo: '',
        avatar: '',
        firstName: '',
        lastName: '',
        division: '',
        subdivision: '',
        dob: null,
        doj: null,
        nationality: '',
        email: '',
        maritalStatus: '',
        employmentStatus: '',
        gender: '',
        suspendDate: null
    }

const reducePerson = (state = defaultState, action) => {
    switch (action.type) {
        case types.SHOW_PERSON_DETAIL:
            return Object.assign({}, state, action.employee);
        case types.CHANGE_GRADE:
            let newValue = Object.assign({}, state);
            newValue[action.fieldType] = action.value;
            return newValue;
        case types.UPDATE_EMPLOYEE_UI:
            return Object.assign({}, action.employee);
        default:
            return state
    }
}

export default reducePerson