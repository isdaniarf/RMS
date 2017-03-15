import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { pinkA200, transparent } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux'
import reducePerson from '../reducers/reducePerson'
import reduceEmployees from '../reducers/reduceEmployees'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

var employees = require('../data/persons.json');
const EXPAND_CONTACT = 'EXPAND_CONTACT';

const style = {
  height: '100%'
};

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
      <Paper style={style} zDepth={2} >
        <List>
          {this.props.employees.map((contact) => (
            <div key={contact.name}>
              <ListItem
                primaryText={contact.name}
                secondaryText={contact.grade}
                leftIcon={<ActionGrade color={pinkA200} />}
                leftAvatar={<Avatar src={contact.avatar} />}
                onTouchTap={() => this.props.actions.boundShowPersonDetail(contact)}
              />
              {/*<Divider />*/}
            </div>
          ))}
        </List>
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