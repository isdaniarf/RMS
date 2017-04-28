import * as types from '../actions/actionTypes'

const defaultState = {
    isModalShown: false
}

const reduceAddModal = (state = defaultState, action) => {
    switch (action.type) {
        case types.SHOW_ADD_MODAL:
            return Object.assign({}, {
                isModalShown: action.isModalShown
            })
        default: return state;
    }
}

export default reduceAddModal;