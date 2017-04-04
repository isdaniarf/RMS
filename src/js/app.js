/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../assets/css/global.css'
import { black, white, indigo500, indigo300 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import EmployeeList from './components/employeeList';
import ProfileHeader from './components/profileHeader';
import RightSection from './components/rightSection';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import 'material-design-lite/material.js';
import 'material-design-lite/material.css';
import ActionSettings from 'material-ui/svg-icons/action/settings'
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'
import EmployeeDetail from './components/employeeDetail'

import { createStore, applyMiddleware, compose } from 'redux';
import rmsApp from './reducers/reducerIndex'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// require('./style.css')
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rmsApp, composeEnhancers(applyMiddleware(thunk)));
var employees = require('./data/persons.json');

export const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        textColor: white,
        alternateTextColor: white,
        // disabledColor: white
    },
    appBar: {
        height: 70,
    },
});

export const secondaryTheme = getMuiTheme({
    palette: {
        primary1Color: indigo300,
        textColor: white,
        disabledColor: black
    },
    appBar: {
        height: 70,
    },
});

export const employeeDetailTheme = getMuiTheme({
    palette: {
        textColor: black,
        disabledColor: black
    },
    appBar: {
        height: 70,
    },
});

const MyButton = () => (
    <RaisedButton label="Default" />
);

const TopBar = () => (
    <AppBar
        title={<ProfileHeader func={'header clicked'} />}
        iconClassNameRight='muidocs-icon-action-settings'
    >

    </AppBar>
);

const leftSection = {
    width: '22%',
    height: 800,
    // minWidth: 300,
    float: 'left',
    // overflow: 'hidden',
    // position: 'relative',
    // display: 'flex'
};

const rightSection = {
    width: '78%',
    // minWidth: 1000,
    // height: '100%',
    // float: 'right',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block'
};

const wrapperStyle = {
    // minWidth: 800,
    // clear: 'both',
    // margin: 0,
    // padding: 0
}

const gridStyle = {
    padding: 0
}

class WrapperComponent extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={wrapperStyle}>
                    <div>
                        <TopBar />
                    </div>

                    <div style={leftSection}>
                        <EmployeeList />
                    </div>
                    <MuiThemeProvider muiTheme={secondaryTheme}>
                        <div style={rightSection}>
                            <RightSection selectedTab={this.props.selectedTab} />
                        </div>
                    </MuiThemeProvider>
                </div>
            </MuiThemeProvider>
        )
    }
}

const App = () => (
    <Provider store={store}>
        {/*<WrapperComponent />*/}
        <Router>
            <div>
                <Route exact path="/" render={() => <WrapperComponent selectedTab={0} />} />
                <Route path="/personalDetail" render={() => <WrapperComponent selectedTab={0} />} />
                <Route path="/employmentHistory" render={() => <WrapperComponent selectedTab={1} />} />
                <Route path="/gradeHistory" render={() => <WrapperComponent selectedTab={2} />} />
                <Route path="/dependants" render={() => <WrapperComponent selectedTab={3} />} />
                <Route path="/locationHistory" render={() => <WrapperComponent selectedTab={5} />} />
            </div>
        </Router>
    </Provider>
);

export default App;