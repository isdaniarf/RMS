import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import EmployeeDetail from './employeeDetail'
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionHistory from 'material-ui/svg-icons/action/history';
import MapsLayers from 'material-ui/svg-icons/maps/layers';
import NotificationWC from 'material-ui/svg-icons/notification/wc';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { employeeDetailTheme } from '../app'
import GradeHistory from './gradeHistory'
import FamilyMembers from './familyMembers'
import EmploymentHistory from './employmentHistory'
import LocationHistory from './locationHistory'
import {  NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import * as Util from '../util/util'

const gradeHistoryStyle = {
  margin: 40
}

class RightSection extends Component {
  render() {
    // const employeeDetail = Util.isObjectEmpty(this.props.person) ? <div /> : <EmployeeDetail />;
    return (
      <Tabs initialSelectedIndex={this.props.selectedTab}>
        <Tab
          label={<SocialPerson />}
          containerElement={<NavLink activeClassName="active" to="/personalDetail" />}
        >
          <div>
            <MuiThemeProvider muiTheme={employeeDetailTheme}>
              <EmployeeDetail />
            </MuiThemeProvider>
          </div>
        </Tab>
        <Tab
          label={<ActionHistory />}
          containerElement={<NavLink activeClassName="active" to="/employmentHistory" />}
        >
          <div style={gradeHistoryStyle}>
            <MuiThemeProvider muiTheme={employeeDetailTheme}>
              <EmploymentHistory />
            </MuiThemeProvider>
          </div>
        </Tab>
        <Tab
          label={<MapsLayers />}
          containerElement={<NavLink activeClassName="active" to="/gradeHistory" />}
        >
          <div style={gradeHistoryStyle}>
            <MuiThemeProvider muiTheme={employeeDetailTheme}>
              <GradeHistory />
            </MuiThemeProvider>
          </div>
        </Tab>
        <Tab
          label={<NotificationWC />}
          containerElement={<NavLink activeClassName="active" to="/dependants" />}
        >
          <div style={gradeHistoryStyle}>
            <MuiThemeProvider muiTheme={employeeDetailTheme}>
              <FamilyMembers />
            </MuiThemeProvider>
          </div>
        </Tab>
        <Tab
          label={<ActionHome />}
          data-route="/home"
        >
          <div>
          </div>
        </Tab>
        <Tab
          label={<MapsPlace />}
          containerElement={<NavLink activeClassName="active" to="/locationHistory" />}
        >
          <div style={gradeHistoryStyle}>
            <MuiThemeProvider muiTheme={employeeDetailTheme}>
              <LocationHistory />
            </MuiThemeProvider>
          </div>
        </Tab>
      </Tabs>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        person: state.reducePerson,
    };
}

export default connect(mapStateToProps)(RightSection);