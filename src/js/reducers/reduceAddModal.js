import * as ActionIndex from '../actions/actionIndex'

const defaultState = {
    isModalShown: false
}

const reduceAddModal = (state = defaultState, action) => {
    switch (action.type) {
        case ActionIndex.SHOW_ADD_MODAL:
            return Object.assign({}, {
                isModalShown: action.isModalShown
            })
        default: return state;
    }
}

export default reduceAddModal;