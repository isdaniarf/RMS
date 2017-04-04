import * as ActionIndex from '../actions/actionIndex'

const initialState = {
    selectedTab: 0
}

const reduceTab = (state = initialState, action) => {
    switch (action.type) {
        case ActionIndex.CHANGE_TAB:
            return Object.assign({}, { selectedTab: action.selectedTab });
        default:
            return state;
    }
}

export default reduceTab;