import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { grey800, grey500, indigo100, indigo800 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {muiTheme} from '../app'
import SearchBar from './searchBar'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked'

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

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

const EmployeeDetail = (props) => (
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
    this.props.actions.boundLoadContacts();
  }

  handleChange(value, index) {
    // console.log(this.props.employees)
    this.props.actions.boundShowEmployeeDetail(value);
    this.props.actions.boundSetSelectedEmployee(index);
  }

  render() {
    return (
      <Paper style={paperStyle} zDepth={0} rounded={false} >
        <SearchBar />
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <List style={listStyle}>
              {this.props.employees.filtered.map((person, index) => (
                <ListItem
                  primaryText={<PersonName person={person} />}
                  secondaryText={<EmployeeDetail person={person} />}
                  secondaryTextLines={2}
                  leftAvatar={<Avatar src={person.avatar} size={52} />}
                  rightIcon={<RightItemIcon />}
                  onTouchTap={() => this.handleChange(person, index)}
                  style={this.props.employees.selected === index ? listItemStyleSelected : listItemStyle}
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