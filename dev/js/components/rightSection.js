import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import PersonDetail from './personDetail'
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionHistory from 'material-ui/svg-icons/action/history';
import MapsLayers from 'material-ui/svg-icons/maps/layers';
import NotificationWC from 'material-ui/svg-icons/notification/wc';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { personDetailTheme, secondaryTheme } from '../app'
import GradeHistory from './gradeHistory'
import FamilyMembers from './familyMembers'
import EmploymentHistory from './employmentHistory'

import { indigo300, blue500, red500, greenA200 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const tabStyle = {
  backgroundColor: indigo300
}

const gradeHistoryStyle = {
  margin: 40
}

const RightSection = () => (
  <Tabs>
    <Tab label={<SocialPerson />} >
      <div>
        <MuiThemeProvider muiTheme={personDetailTheme}>
          <PersonDetail />
        </MuiThemeProvider>
      </div>
    </Tab>
    <Tab label={<ActionHistory />} >
      <div style={gradeHistoryStyle}>
        <MuiThemeProvider muiTheme={personDetailTheme}>
          <EmploymentHistory />
        </MuiThemeProvider>
      </div>
    </Tab>
    <Tab
      label={<MapsLayers />}
      data-route="/home"
    >
      <div style={gradeHistoryStyle}>
        <MuiThemeProvider muiTheme={personDetailTheme}>
          <GradeHistory />
        </MuiThemeProvider>
      </div>
    </Tab>
    <Tab
      label={<NotificationWC />}
      data-route="/home"
    >
      <div style={gradeHistoryStyle}>
        <MuiThemeProvider muiTheme={personDetailTheme}>
          <FamilyMembers />
        </MuiThemeProvider>
      </div>
    </Tab>
    <Tab
      label={<ActionHome />}
      data-route="/home"
    >
      <div>
        <h2>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label={<MapsPlace />}
      data-route="/home"
    >
      <div style={gradeHistoryStyle}>
        <MuiThemeProvider muiTheme={personDetailTheme}>
          <EmploymentHistory />
        </MuiThemeProvider>
      </div>
    </Tab>
  </Tabs>
);

export default RightSection;