import * as ActionIndex from '../actions/actionIndex'

const initialState = {
    isOpen: false
}

const reducePerson = (state = initialState, action) => {
     switch (action.type) {
        case ActionIndex.TOGGLE_SAVE_SNACKBAR:
        // console.log(action.isOpen);
            return Object.assign({}, state, {
                isOpen: action.isOpen
            });
        default:
            return state;
    }
}

export default reducePerson;