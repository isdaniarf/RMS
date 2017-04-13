import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import IconButton from 'material-ui/IconButton'

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

class FamilyMembers extends Component {
    render() {
        const dependants = this.props.dependants || [];
        return (
            <Table
                selectable={false}
                multiSelectable={false}
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
                <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Gender</TableHeaderColumn>
                        <TableHeaderColumn>DOB</TableHeaderColumn>
                        <TableHeaderColumn>Type</TableHeaderColumn>
                        <TableHeaderColumn>Active</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {dependants.map(dependant => (
                        <TableRow key={dependant.firstName+' '+dependant.lastName}>
                            <TableRowColumn>{dependant.firstName+' '+dependant.lastName}</TableRowColumn>
                            <TableRowColumn>{dependant.gender}</TableRowColumn>
                            <TableRowColumn>{dependant.dob}</TableRowColumn>
                            <TableRowColumn>{dependant.dependantType}</TableRowColumn>
                            <TableRowColumn><ToggleCheckBox /></TableRowColumn>
                            <TableRowColumn><IconButton tooltip="Edit"><ImageEdit /></IconButton></TableRowColumn>
                            <TableRowColumn><IconButton tooltip="Delete"><ActionDelete /></IconButton></TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        dependants: state.reducePerson.dependants
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionIndex, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyMembers);