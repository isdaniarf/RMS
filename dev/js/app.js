import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import EmployeeList from './components/EmployeeList';
import ProfileHeader from './components/profileHeader';
import RightSection from './components/rightSection';
import { createStore, applyMiddleware, compose } from 'redux';
import rmsApp from './reducers/reducerIndex'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// require('./style.css')
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rmsApp, composeEnhancers(applyMiddleware(thunk)));
var employees = require('./data/persons.json');

// console.log(store.getState());

const MyButton = () => (
    <RaisedButton label="Default" />
);

const TopBar = () => (
    <AppBar
        title={<ProfileHeader func={'header clicked'} />}
        iconClassNameRight='muidocs-icon-navigation-expand-more'
    >

    </AppBar>
);

const leftSection = {
    width: '20%',
    float: 'left'
};

const rightSection = {
    float: 'right',
    width: '80%'
};

class WrapperComponent extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <TopBar />
                    </div>
                    <div style={leftSection}>
                        <EmployeeList />
                    </div>
                    <div style={rightSection}>
                        <RightSection />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <WrapperComponent />
    </Provider>,
    document.getElementById('react')
)