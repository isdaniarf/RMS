import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { white, grey800, indigo100, indigo300, cyan500, pinkA200, transparent } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
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

const paperStyle = {
  minWidth: 300
};

const listStyle = {
  overflowY: 'scroll',
  padding: 0
}

const addEmployeeButton = {
  position: 'relative',
  bottom: 20,
  left: 210
}

const listItemStyle = {
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: '130%',
  backgroundColor: indigo100
}

const personNameStyle = {
  marginLeft: 10
}

const subTextStyle = {
  fontSize: 12,
  fontWeight: 'normal',
  color: grey800,
  marginLeft: 10
}

const styles = {
  large: {
    width: 40
  },
};

const PersonName = (props) => (
  <div style={personNameStyle}>{props.person.name}</div>
)

const PersonDetail = (props) => (
  <div style={subTextStyle}>{props.person.grade}, {props.person.detail.division} {props.person.detail.subDivision}<br/>
  {props.person.city}, {props.person.mobileNo}</div>
)

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.actions.boundLoadContacts(employees);
  }

  render() {
    return (
      <Paper style={paperStyle} zDepth={0} >
        <SearchBar />
        <MuiThemeProvider muiTheme={muiTheme}>
          <List style={listStyle}>
            {this.props.employees.filtered.map((person) => (
              <div key={person.name}>
                <ListItem
                  primaryText={<PersonName person={person}/>}
                  secondaryText={<PersonDetail person={person}/>}
                  secondaryTextLines={2}
                  leftAvatar={<Avatar src={person.avatar} size={52}/>}                  
                  onTouchTap={() => this.props.actions.boundShowPersonDetail(person)}
                  style={listItemStyle}
                />
              </div>
            ))}
            <FloatingActionButton secondary={true} style={addEmployeeButton}>
              <ContentAdd style={styles.large}/>
            </FloatingActionButton>
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