/* eslint-disable */
/* stylesheets */
import '../../assets/css/global.css'
import 'material-design-lite/material.js';
import 'material-design-lite/material.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { black, white, indigo500, indigo300 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import EmployeeList from './employeeList';
import ProfileHeader from './profileHeader';
import RightSection from './rightSection';
import ActionSettings from 'material-ui/svg-icons/action/settings'
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'
import EmployeeDetail from './employeeDetail'
import AddEmployeeModal from './addEmployeeModal'

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        textColor: white,
        alternateTextColor: white,
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

const addModalTheme = getMuiTheme({
    palette: {
        primary1Color: indigo300,
        textColor: black,
        disabledColor: black
    }
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
                    <MuiThemeProvider muiTheme={addModalTheme}>
                        <AddEmployeeModal isOpen={this.props.isModalShown} />
                    </MuiThemeProvider>
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

function mapStateToProps(state, ownProps) {
    return {
        isModalShown: state.reduceAddModal.isModalShown
    };
}

export default connect(mapStateToProps)(WrapperComponent);