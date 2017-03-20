import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux'
import reducePerson from '../reducers/reducePerson'
import reduceEmployees from '../reducers/reduceEmployees'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

const styles = {
    customWidth: {
        width: 150,
    },
};

class SelectGrade extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.props.actions.boundChangeGrade(value)
    }

    render() {
        let grades = ['SE-JP','SE-PG','SE-AP','SE-AN','MJF-PM']
        return (
            <div>
                <SelectField
                    value={this.props.person.grade}
                    onChange={this.handleChange}
                >
                {grades.map((grade) => (
                    <MenuItem key={grade} value={grade} primaryText={grade} />
                ))}
                    {/*<MenuItem value={1} primaryText="SE-JP" />
                    <MenuItem value={2} primaryText="SE-PG" />
                    <MenuItem value={3} primaryText="SE-AP" />
                    <MenuItem value={4} primaryText="SE-AN" />
                    <MenuItem value={5} primaryText="MJF-PM" />*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectGrade);