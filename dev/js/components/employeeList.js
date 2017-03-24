import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { white, grey800, grey500, indigo100, indigo300, indigo800, cyan500, pinkA200, transparent } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from '../app'
import SearchBar from './searchBar'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked'

import { connect } from 'react-redux'
import reducePerson from '../reducers/reducePerson'
import reduceEmployees from '../reducers/reduceEmployees'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

const EXPAND_CONTACT = 'EXPAND_CONTACT';

const paperStyle = {
  width: '100%',
  minWidth: 320,
  overflow: 'hidden'
};

const listStyle = {
  overflowY: 'scroll',
  minHeight: 500,
  padding: 0
}

const addEmployeeButton = {
  position: 'relative',
  bottom: 50,
  left: 250
}

const listItemStyle = {
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: '130%',
}

const listItemStyleSelected = {
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: '130%',
  backgroundColor: indigo100,
  zIndex: 0
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

const rightItemIconStyle = {
  position: 'abosulute',
  float: 'right',
  paddingTop: 18,
  // marginLeft: 20,
  // paddingLeft: 20,
  // display: 'table-cell',
  // verticalAlign: 'middle'
  // marginRight: 0,
  // marginTop: 10
}

const PersonName = (props) => (
  <div style={personNameStyle}>{props.person.firstName + ' ' + props.person.lastName}</div>
)

const PersonDetail = (props) => (
  <div style={subTextStyle}>{props.person.grade}, {props.person.division} {props.person.subdivision}<br />
    {props.person.city}, {props.person.mobileNo}</div>
)

const RightItemIcon = () => (
  <div style={rightItemIconStyle}>
    <ToggleRadioButtonChecked style={{ color: indigo800 }} />
    <HardwareKeyboardArrowRight style={{ color: grey500 }} />
  </div>
)

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const myHeaders = new Headers();
    const requestParam = {
      method: 'GET',
      headers: {'Access-Control-Allow-Origin':'*'},
      mode: 'cors',
      cache: 'default'
    };
    const employees = require('../data/persons.json');
    let emps = [];
    fetch('http://localhost:8080/app/all', requestParam).then(x => {
      return x.json();
    }).then(y => {
      emps = y;
      this.props.actions.boundLoadContacts(emps);
      // console.log(y);
    });
  }

  handleChange(value) {
    // console.log(value)
    this.props.actions.boundShowPersonDetail(value);
    this.props.actions.boundSetSelectedEmployee(value);
  }

  render() {
    return (
      <Paper style={paperStyle} zDepth={0} rounded={false} >
        <SearchBar />
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <List style={listStyle}>
              {this.props.employees.filtered.map((person) => (
                <ListItem
                  primaryText={<PersonName person={person} />}
                  secondaryText={<PersonDetail person={person} />}
                  secondaryTextLines={2}
                  leftAvatar={<Avatar src={person.avatar} size={52} />}
                  rightIcon={<RightItemIcon />}
                  onTouchTap={() => this.handleChange(person)}
                  style={person.selected ? listItemStyleSelected : listItemStyle}
                  key={person.firstName}
                />
              ))}
            </List>
            <FloatingActionButton secondary={true} mini={false} style={addEmployeeButton} zDepth={4}>
              <ContentAdd style={styles.large} />
            </FloatingActionButton>
          </div>
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