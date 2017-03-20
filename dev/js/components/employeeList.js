import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { white, indigo300, cyan500, pinkA200, transparent } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from '../app'
import SearchBar from './searchBar'

import { connect } from 'react-redux'
import reducePerson from '../reducers/reducePerson'
import reduceEmployees from '../reducers/reduceEmployees'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

var employees = require('../data/persons.json');
const EXPAND_CONTACT = 'EXPAND_CONTACT';

const style = {
  // backgroundColor: pinkA200,
  minWidth: 300
};

const toolbarStyle = {
  backgroundColor: indigo300,
  height: 46,
  width: '100%'
}

const textFieldStyle = {
  width: '100%'
}

const listStyle = {
  overflowY: 'scroll'
}

const elementStyle = {
  marginLeft: 20,
  marginRight: 10
}

function expandContact() {
  return {
    type: EXPAND_CONTACT,
    text
  }
}

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.actions.boundLoadContacts(employees);
  }

  render() {
    return (
      <Paper style={style} zDepth={0} >
        <SearchBar />
        <MuiThemeProvider muiTheme={muiTheme}>
          <List style={listStyle}>
            {this.props.employees.map((person) => (
              <div key={person.name}>
                <ListItem
                  primaryText={person.name}
                  secondaryText={person.grade}
                  leftIcon={<ActionGrade color={pinkA200} />}
                  leftAvatar={<Avatar src={person.avatar} />}
                  onTouchTap={() => this.props.actions.boundShowPersonDetail(person)}
                />
                {/*<Divider />*/}
              </div>
            ))}
          </List>
        </MuiThemeProvider>
      </Paper>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    person: state.reducePerson,
    employees: state.reduceEmployees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionIndex, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);