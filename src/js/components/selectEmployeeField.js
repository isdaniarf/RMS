import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

class SelectEmployeeField extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.props.actions.boundChangeSelectField(this.props.type, value)
    }

    render() {
        // let grades = ['SE-JP','SE-PG','SE-AP','SE-AN','MJF-PM'];
        let values = this.props.items;
        return (
            <div>
                <SelectField
                    value={this.props.person[this.props.type]}
                    onChange={this.handleChange}
                >
                {values.map((value) => (
                    <MenuItem key={value} value={value} primaryText={value} />
                ))}
                </SelectField>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        person: state.reducePerson,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionIndex, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectEmployeeField);