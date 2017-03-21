import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'
import ImageEdit from 'material-ui/svg-icons/image/edit'

export default class FamilyMembers extends Component {
    render() {
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
                    <TableRow>
                        <TableRowColumn>Melissa Lingard</TableRowColumn>
                        <TableRowColumn>Female</TableRowColumn>
                        <TableRowColumn>Wife</TableRowColumn>
                        <TableRowColumn>Jun 1, 1981</TableRowColumn>
                        <TableRowColumn><ToggleCheckBox /></TableRowColumn>
                        <TableRowColumn><ImageEdit /></TableRowColumn>
                        <TableRowColumn><ActionDelete /></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Daniel Hoffman</TableRowColumn>
                        <TableRowColumn>Male</TableRowColumn>
                        <TableRowColumn>Son</TableRowColumn>
                        <TableRowColumn>Jun 13, 2010</TableRowColumn>
                        <TableRowColumn><ToggleCheckBox /></TableRowColumn>
                        <TableRowColumn><ImageEdit /></TableRowColumn>
                        <TableRowColumn><ActionDelete /></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Taylor Hoffman</TableRowColumn>
                        <TableRowColumn>Female</TableRowColumn>
                        <TableRowColumn>Daughter</TableRowColumn>
                        <TableRowColumn>Jun 13, 2012</TableRowColumn>
                        <TableRowColumn><ToggleCheckBox /></TableRowColumn>
                        <TableRowColumn><ImageEdit /></TableRowColumn>
                        <TableRowColumn><ActionDelete /></TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}