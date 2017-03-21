import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import ActionSearch from 'material-ui/svg-icons/action/search'
import { white, black, indigo300 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import ContentSort from 'material-ui/svg-icons/content/sort'
import ContentFilterList from 'material-ui/svg-icons/content/filter-list'
import Chip from 'material-ui/Chip';

import { connect } from 'react-redux'
import reducePerson from '../reducers/reducePerson'
import reduceEmployees from '../reducers/reduceEmployees'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

const toolbarStyle = {
    backgroundColor: indigo300,
    height: 48,
    width: '100%'
}

const elementStyle = {
    marginLeft: 20,
    marginRight: 10
}

const textFieldStyle = {
    width: '100%'
}

const searchFieldStyle = {
    underlineStyle: {
        borderColor: indigo300
    },
    underlineFocusStyle: {
        borderColor: white
    },
    hintStyle: {
        color: white
    }
};

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.props.actions.boundFilterEmployees(value);
        // console.log('props', this.props)
    }

    render() {
        // console.log(this.props)
        return (
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup firstChild={true}>
                    <ActionSearch style={elementStyle} />
                    <TextField
                        id='searchField'
                        style={textFieldStyle}
                        hintText='Search'
                        hintStyle={searchFieldStyle.hintStyle}
                        underlineStyle={searchFieldStyle.underlineStyle}
                        underlineFocusStyle={searchFieldStyle.underlineFocusStyle}
                        onChange={this.handleChange}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ContentSort />
                    <ContentFilterList />
                    <Chip>
                        <div style={{ color: black }}>
                            {this.props.employees.initial.length}
                        </div>
                    </Chip>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        employees: state.reduceEmployees
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionIndex, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);